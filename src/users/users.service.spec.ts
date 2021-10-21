import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersQueryRepository } from './users.query.repository';
import { BoardsQueryRepository } from '../boards/boards.query.repository';
import { PaginationHelper } from '../common/utils/pagination.helper';
import { User } from './users.entity';
import * as faker from 'faker';
import { UserResponse } from '../common/response/user/user.response';
import { UserSearchRequest } from './dto/user.search.request';

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
  let queryRepository: UsersQueryRepository;
  let paginationHelper: PaginationHelper<UserResponse>;
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
    queryRepository = module.get<UsersQueryRepository>(UsersQueryRepository);
    paginationHelper =
      module.get<PaginationHelper<UserResponse>>(PaginationHelper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    expect(queryRepository).toBeDefined();
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
      queryRepository.getSingleUserInfo = jest
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

      queryRepository.getSingleUserInfo = jest
        .fn()
        .mockResolvedValueOnce(undefined);

      // when
      const result = service.getSingleUserInfo(invalidUserId);

      // then
      expect(result).rejects.toThrowError();
    });
  });

  describe('Get-All-UserInfo-Using-Pagination', () => {
    it('should be return Page<UserResponse> Type Response', () => {
      // given
      const userSearchRequest: UserSearchRequest = {} as any;

      const totalCount = faker.datatype.number();
      const pageSize = faker.datatype.number();
      const totalPage = totalCount / pageSize;

      const user: User = {
        userId: faker.datatype.number(),
        nickname: faker.internet.userName(),
      } as any;

      const getAllUserInfoUsingPaginationSuccessResponse = [
        [[user], totalCount],
      ];

      const userResponse: UserResponse = {} as any;

      const successResponse = {
        pageSize,
        totalCount,
        totalPage,
        items: [userResponse],
      };

      queryRepository.getAllUserInfoUsingPagination = jest
        .fn()
        .mockResolvedValueOnce(getAllUserInfoUsingPaginationSuccessResponse);

      paginationHelper.getPaginationItems = jest
        .fn()
        .mockResolvedValueOnce(successResponse);

      // when
      const result = service.getAllUserInfoUsingPagination(userSearchRequest);

      // then
      expect(result).resolves.toStrictEqual(successResponse);
    });

    it('should be throw BadRequestException If user is not existed in database', () => {
      // given
      const userSearchRequest: UserSearchRequest = {} as any;

      const totalCount = faker.datatype.number();

      const getAllUserInfoUsingPaginationSuccessResponse = [[], totalCount];

      queryRepository.getAllUserInfoUsingPagination = jest
        .fn()
        .mockResolvedValueOnce(getAllUserInfoUsingPaginationSuccessResponse);

      // when
      const result = service.getAllUserInfoUsingPagination(userSearchRequest);

      // then
      expect(result).rejects.toThrowError();
    });
  });
});
