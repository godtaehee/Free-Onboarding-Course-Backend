import { Test, TestingModule } from '@nestjs/testing';
import { BoardsService } from './boards.service';
import { BoardsRepository } from './boards.repository';
import { BoardsQueryRepository } from './boards.query.repository';
import * as faker from 'faker';
import { BoardCreateDto } from './dto/board.create.dto';
import { Board } from './boards.entity';
import { BoardSearchRequest } from './dto/board.search.request';
import { PaginationHelper } from '../common/utils/pagination.helper';
import { NotIncludeSensitiveInfoBoardResponse } from '../common/response/board/not.include.sensitive.info.board.response';

const mockBoardsRepository = {
  save: jest.fn(),
};

const mockBoardsQueryRepository = {
  save: jest.fn(),
};

const mockPageNationHelper = {
  getPaginationItems: jest.fn(),
};
describe('BoardsService', () => {
  let service: BoardsService;
  let commandRepository: BoardsRepository;
  let queryRepository: BoardsQueryRepository;
  let paginationHelper: PaginationHelper<NotIncludeSensitiveInfoBoardResponse>;

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
        {
          provide: PaginationHelper,
          useValue: mockPageNationHelper,
        },
      ],
    }).compile();

    service = module.get<BoardsService>(BoardsService);
    commandRepository = module.get<BoardsRepository>(BoardsRepository);
    queryRepository = module.get<BoardsQueryRepository>(BoardsQueryRepository);
    paginationHelper =
      module.get<PaginationHelper<NotIncludeSensitiveInfoBoardResponse>>(
        PaginationHelper,
      );
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
      expect(result).toStrictEqual(successResponse);
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

      queryRepository.getSingleBoardByBoardId = jest
        .fn()
        .mockResolvedValueOnce(singleBoard);

      // when
      const result = await service.getSingleBoard(boardId);

      // then
      expect(result).toStrictEqual(singleBoard);
    });

    it('should throw BadRequestException if certain error is occurred', () => {
      // given

      queryRepository.getSingleBoardByBoardId = jest
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

      paginationHelper.getPaginationItems = jest
        .fn()
        .mockResolvedValueOnce(successResponse);

      // when
      const result = service.getAllBoard(query);

      // then
      expect(result).resolves.toStrictEqual(successResponse);
    });

    it('should return all board which is contained valid page scope', () => {
      // given
      const boards = [];
      const totalCount = {} as any;
      const query = {} as any;

      queryRepository.getAllBoard = jest
        .fn()
        .mockResolvedValueOnce([boards, totalCount]);

      // when
      const result = service.getAllBoard(query);
      // then
      expect(result).rejects.toThrowError();
    });
  });

  describe('Update-Board', () => {
    const userId = faker.datatype.number();
    const boardId = faker.datatype.number();

    const updateRequestBody = {
      title: faker.lorem.sentence(),
      content: faker.lorem.sentences(),
    };
    it('should return updated board', () => {
      // given

      const selectedBoard = {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
      };

      const successUpdatedBoard = {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
      };

      queryRepository.getSingleBoardSpecificUser = jest
        .fn()
        .mockResolvedValueOnce(selectedBoard);

      commandRepository.updateBoard = jest
        .fn()
        .mockResolvedValueOnce(successUpdatedBoard);

      // when
      const result = service.updateBoard(userId, boardId, updateRequestBody);

      // then
      expect(result).resolves.toStrictEqual(successUpdatedBoard);
    });

    it('should throw Error if selectedBoard is not existed in board database table', () => {
      // given
      queryRepository.getSingleBoardSpecificUser = jest
        .fn()
        .mockResolvedValueOnce(undefined);

      // when
      const result = service.updateBoard(userId, boardId, updateRequestBody);

      // then
      expect(result).rejects.toThrowError();
    });
  });

  describe('Delete-Boards', () => {
    it('should return deleted boardId If soft-delete is succeed', () => {
      // given
      const validUserId = faker.datatype.number();
      const validBoardId = faker.datatype.number();

      service.confirmValidBoard = jest.fn().mockResolvedValueOnce(true);
      commandRepository.deleteBoard = jest.fn().mockResolvedValueOnce(true);

      // when
      const result = service.deleteBoard(validUserId, validBoardId);

      // then
      expect(result).resolves.toStrictEqual({
        boardId: validBoardId,
      });
    });

    it('should throw Error if selectedBoard is not existed in board database table', () => {
      // given

      const notValidUserId = faker.datatype.number();
      const notValidBoardId = faker.datatype.number();
      queryRepository.getSingleBoardSpecificUser = jest
        .fn()
        .mockResolvedValueOnce(undefined);

      // when
      const result = service.deleteBoard(notValidUserId, notValidBoardId);

      // then
      expect(result).rejects.toThrowError();
    });
  });
});
