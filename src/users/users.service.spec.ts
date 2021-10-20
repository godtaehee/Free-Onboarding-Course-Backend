import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersQueryRepository } from './users.query.repository';
import { BoardsQueryRepository } from '../boards/boards.query.repository';
import { PaginationHelper } from '../common/utils/pagination.helper';

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
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
