import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { SignUpDto } from './dto/sign.up.dto';
import * as faker from 'faker';

const mockUsersRepository = {
  create: jest.fn(),
  save: jest.fn(),
  signUp: jest.fn(),
};

describe('UsersService', () => {
  let service: UsersService;
  let repository: UsersRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: mockUsersRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have repository ', () => {
    expect(repository).toBeDefined();
  });

  describe('Sign-up', () => {
    it('should be return token when sign-up is succeed', async () => {
      // given
      const shaAlgorithmValue = 256 / 4;

      const signUpDTO: SignUpDto = {
        email: faker.internet.email(),
        password: faker.internet.password(),
        nickname: faker.internet.userName(),
      };

      const successResponse = {
        success: true,
        token: `${faker.datatype.hexaDecimal(
          shaAlgorithmValue,
        )}.${faker.datatype.hexaDecimal(
          shaAlgorithmValue,
        )}.${faker.datatype.hexaDecimal(shaAlgorithmValue)}`,
      };

      repository.signUp = jest.fn().mockResolvedValueOnce(successResponse);

      // when
      const result = await service.signUp(signUpDTO);

      // then
      expect(result).toBe(successResponse);
    });
  });
});
