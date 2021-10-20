import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersQueryRepository } from './users.query.repository';
import { BoardsQueryRepository } from '../boards/boards.query.repository';
import { PaginationHelper } from '../common/utils/pagination.helper';
import { User } from './users.entity';
import * as faker from 'faker';

const mockUsersQueryRepository = {
  create: jest.fn(),
  save: jest.fn(),
};

const mockBoardQueryRepository = {
  create: jest.fn(),
  save: jest.fn(),
};

const mockPageNationHelper = {
  getPaginationItems: jest.fn(),
};
describe('UsersService', () => {
  let service: UsersService;
  let mockQueryRepository: UsersQueryRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersQueryRepository,
          useValue: mockUsersQueryRepository,
        },
        {
          provide: BoardsQueryRepository,
          useValue: mockBoardQueryRepository,
        },
        {
          provide: PaginationHelper,
          useValue: mockPageNationHelper,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    mockQueryRepository =
      module.get<UsersQueryRepository>(UsersQueryRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    expect(mockQueryRepository).toBeDefined();
  });

  describe('Get-Single-User-Info', () => {
    it('should be return single user info', () => {
      // given
      const user: User = {
        userId: faker.datatype.number(),
      } as any;

      const validUserId = faker.datatype.number();

      const successResponse = {
        success: true,
        data: user,
      };
      mockQueryRepository.getSingleUserInfo = jest
        .fn()
        .mockResolvedValueOnce(successResponse);

      // when
      const result = service.getSingleUserInfo(validUserId);

      // then
      expect(result).resolves.toStrictEqual(successResponse);
    });

    it('should be throw error if requested userId is invalid', () => {
      // given
      const invalidUserId = faker.datatype.number();

      mockQueryRepository.getSingleUserInfo = jest
        .fn()
        .mockResolvedValueOnce(undefined);

      // when
      const result = service.getSingleUserInfo(invalidUserId);

      // then
      expect(result).rejects.toThrowError();
    });
  });
});
