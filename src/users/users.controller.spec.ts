import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import * as faker from 'faker';
import { User } from './users.entity';
import { UsersQueryRepository } from './users.query.repository';

const mockQueryRepository = {
  create: jest.fn(),
  save: jest.fn(),
};
describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: UsersQueryRepository,
          useValue: mockQueryRepository,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Get-Single-User-Info', () => {
    it('should return UserInfo', async () => {
      // given
      const userId = faker.datatype.number();
      const userInfo: User = {
        id: faker.datatype.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        nickname: faker.internet.userName(),
      } as any;

      service.getSingleUserInfo = jest.fn().mockResolvedValueOnce(userInfo);

      // when
      const result = await controller.getSingleUserInfo(userId);

      // then
      expect(result).toStrictEqual(userInfo);
    });
  });
});
