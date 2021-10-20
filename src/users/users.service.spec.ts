import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersQueryRepository } from './users.query.repository';
import { BoardsQueryRepository } from '../boards/boards.query.repository';

const mockUsersQueryRepository = {
  create: jest.fn(),
  save: jest.fn(),
};

const mockBoardQueryRepository = {
  create: jest.fn(),
  save: jest.fn(),
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
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
