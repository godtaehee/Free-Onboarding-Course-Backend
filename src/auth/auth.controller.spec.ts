import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import * as faker from 'faker';
import { ArgumentMetadata, ValidationPipe } from '@nestjs/common';
import { SignUpDto } from './dto/sign.up.dto';
import { SignInDto } from './dto/sign.in.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

const mockAuthService = {
  signUp: jest.fn(),
};

const mockWinston = {
  debug: jest.fn(),
};

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
        {
          provide: WINSTON_MODULE_PROVIDER,
          useValue: mockWinston,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have service', () => {
    expect(service).toBeDefined();
  });

  describe('Sign-Up', () => {
    it('should require the proper type', async () => {
      // given
      const notContainEmailRequestBody = {
        password: faker.internet.password(),
        nickname: faker.internet.userName(),
      };
      let target: ValidationPipe = new ValidationPipe({
        transform: true,
        whitelist: true,
      });
      const metadata: ArgumentMetadata = {
        type: 'body',
        metatype: SignUpDto,
      };

      // when
      // then
      try {
        await target.transform(notContainEmailRequestBody, metadata);
      } catch (err) {
        expect(err.getResponse().message).toStrictEqual([
          'email must be longer than or equal to 5 characters',
          'email must be an email',
          'email should not be empty',
        ]);
      }
    });

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

      service.signUp = jest.fn().mockResolvedValueOnce(successResponse);
      // when
      const result = await controller.signUp(signUpDTO);
      // then
      expect(result).toBe(successResponse);
    });
  });

  describe('Sign-In', () => {
    it('should return access-token when sign-in is succeed', async () => {
      // given
      const shaAlgorithmValue = 256 / 4;

      const signInDto: SignInDto = {
        email: faker.internet.email(),
        password: faker.internet.password(),
      };

      const successResponse = {
        success: true,
        token: `${faker.datatype.hexaDecimal(
          shaAlgorithmValue,
        )}.${faker.datatype.hexaDecimal(
          shaAlgorithmValue,
        )}.${faker.datatype.hexaDecimal(shaAlgorithmValue)}`,
      };

      service.signIn = jest.fn().mockResolvedValueOnce(successResponse);

      // when
      const result = await controller.signIn(signInDto);

      // then
      expect(result).toBe(successResponse);
    });
  });
});
