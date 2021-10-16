import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersRepository } from '../users/users.repository';
import { UtilsHelper } from '../common/utils/utils.helper';
import { SignUpDto } from './dto/sign.up.dto';
import * as faker from 'faker';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

const shaAlgorithmValue = 256 / 4;

const fakeJwtToken = `${faker.datatype.hexaDecimal(
  shaAlgorithmValue,
)}.${faker.datatype.hexaDecimal(
  shaAlgorithmValue,
)}.${faker.datatype.hexaDecimal(shaAlgorithmValue)}`;

const mockUsersRepository = {
  create: jest.fn(),
  save: jest.fn(),
  signUp: jest.fn(),
  signIn: jest.fn(),
};

const mockJwtService = {
  sign: jest.fn().mockReturnValueOnce(fakeJwtToken),
};
describe('AuthService', () => {
  let service: AuthService;
  let repository: UsersRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersRepository,
          useValue: mockUsersRepository,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
        UtilsHelper,
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    repository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have repository ', () => {
    expect(repository).toBeDefined();
  });

  describe('Sign-up', () => {
    it('should return id when sign-up is succeed', async () => {
      // given

      const signUpDTO: SignUpDto = {
        email: faker.internet.email(),
        password: faker.internet.password(),
        nickname: faker.internet.userName(),
      };

      const successResponse = {
        success: true,
        id: faker.datatype.number(),
      };

      repository.signUp = jest.fn().mockResolvedValueOnce(successResponse);

      // when
      const result = await service.signUp(signUpDTO);

      // then
      expect(result).toBe(successResponse);
    });

    it('should make hashed password to use in UsersRepository', async () => {
      // given
      const requestBody: SignUpDto = {
        email: faker.internet.email(),
        nickname: faker.internet.userName(),
        password: faker.random.alpha(),
      };
      Object.defineProperties(bcrypt, {
        genSalt: {
          value: jest
            .fn()
            .mockResolvedValueOnce(faker.datatype.hexaDecimal(16)),
        },
        hash: {
          value: jest
            .fn()
            .mockResolvedValueOnce(faker.datatype.hexaDecimal(64)),
        },
      });

      // when
      await service.signUp(requestBody as any);

      // then
      expect(
        requestBody.password !==
          (await bcrypt.hash(requestBody.password, await bcrypt.genSalt())),
      ).toBeTruthy();
    });
  });

  describe('Sign-in', () => {
    it('should return valid access-token if user exist and password comparing is succeed', async () => {
      // given
      const signInDto = {};
      repository.signIn = jest.fn().mockResolvedValueOnce({
        id: faker.datatype.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        nickname: faker.internet.userName(),
      });

      Object.defineProperty(bcrypt, 'compare', {
        value: jest.fn().mockResolvedValueOnce(true),
      });

      // when
      const result = await service.signIn(signInDto as any);

      // then
      expect(result.accessToken).toBe(fakeJwtToken);
    });
  });
});
