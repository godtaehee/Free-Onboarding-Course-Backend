import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SignUpDto } from './dto/sign.up.dto';
import * as faker from 'faker';
import { ArgumentMetadata, ValidationPipe } from '@nestjs/common';

const mockUsersService = {
  signUp: jest.fn(),
};
describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
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
          'email must be an email',
          'email should not be empty',
        ]);
      }
    });

    it('should return id when sign-up is succeed', async () => {
      // given
      const shaAlgorithmValue = 256 / 4;

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
});
