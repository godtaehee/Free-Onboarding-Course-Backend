import { Test, TestingModule } from '@nestjs/testing';
import { BoardsService } from './boards.service';
import { BoardsRepository } from './boards.repository';
import { BoardsQueryRepository } from './boards.query.repository';

const mockBoardsRepository = {
  save: jest.fn(),
};

const mockBoardsQueryRepository = {
  save: jest.fn(),
};
describe('BoardsService', () => {
  let service: BoardsService;
  let commandRepository: BoardsRepository;
  let queryRepository: BoardsQueryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BoardsService,
        {
          provide: BoardsRepository,
          useValue: mockBoardsRepository,
        },
        {
          provide: BoardsQueryRepository,
          useValue: mockBoardsQueryRepository,
        },
      ],
    }).compile();

    service = module.get<BoardsService>(BoardsService);
    commandRepository = module.get<BoardsRepository>(BoardsRepository);
    queryRepository = module.get<BoardsQueryRepository>(BoardsQueryRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    expect(commandRepository).toBeDefined();
  });
});
