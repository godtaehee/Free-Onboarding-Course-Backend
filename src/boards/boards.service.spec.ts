import { Test, TestingModule } from '@nestjs/testing';
import { BoardsService } from './boards.service';
import { BoardsRepository } from './boards.repository';
import { BoardsQueryRepository } from './boards.query.repository';
import * as faker from 'faker';
import { BoardCreateDto } from './dto/board.create.dto';
import { Board } from './boards.entity';
import { BoardSearchRequest } from './dto/board.search.request';

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

  it('should be defined', () => {
    expect(queryRepository).toBeDefined();
  });

  describe('Create-Board', () => {
    it('should return success property and boardId', async () => {
      // given
      const user = {
        id: faker.datatype.number(),
      };
      const boardCreateDto: BoardCreateDto = {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
      };

      const successResponse = {
        success: true,
        data: {
          boardId: faker.datatype.number(),
        },
      };

      commandRepository.createBoard = jest
        .fn()
        .mockResolvedValueOnce(successResponse);

      // when
      const result = await service.createBoard(user as any, boardCreateDto);

      // then
      expect(result).toBe(successResponse);
    });
  });

  describe('Get-Single-Board', () => {
    const boardId: number = faker.datatype.number();
    it('should return single board if boardId is valid number', async () => {
      // given
      const singleBoard: Board = {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
      } as any;

      queryRepository.getSingleBoard = jest
        .fn()
        .mockResolvedValueOnce(singleBoard);

      // when
      const result = await service.getSingleBoard(boardId);

      // then
      expect(result).toBe(singleBoard);
    });

    it('should throw BadRequestException if certain error is occurred', () => {
      // given

      queryRepository.getSingleBoard = jest
        .fn()
        .mockResolvedValueOnce(undefined);
      // when
      const result = service.getSingleBoard(boardId);

      // then
      expect(result).rejects.toThrowError();
    });
  });

  describe('Get-All-Board', () => {
    const board: Board = {
      title: faker.lorem.sentence(),
      content: faker.lorem.sentences(),
    } as any;
    it('should return all board which is contained valid page scope', () => {
      // given
      const boards = [board];
      const pageSize = faker.datatype.number(50);
      const totalCount = faker.datatype.number();
      const totalPage = totalCount / pageSize;
      const query: BoardSearchRequest = {} as any;

      const successResponse = {
        pageSize,
        totalCount,
        totalPage,
        items: boards,
      };
      queryRepository.getAllBoard = jest
        .fn()
        .mockResolvedValueOnce([boards, totalCount]);

      service.getPaginationItems = jest
        .fn()
        .mockResolvedValueOnce(successResponse);

      // when
      const result = service.getAllBoard(query);

      // then
      expect(result).resolves.toBe(successResponse);
    });
  });
});
