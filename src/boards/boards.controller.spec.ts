import { Test, TestingModule } from '@nestjs/testing';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import * as faker from 'faker';
import { BoardCreateDto } from './dto/board.create.dto';
import { User } from '../users/users.entity';
import { BoardUpdateDto } from './dto/board.update.dto';
import { PaginationHelper } from '../common/utils/pagination.helper';
import { NotIncludeUserInfoResponse } from '../common/response/board/not.include.user.info.response';

const mockWinston = {
  debug: jest.fn(),
};

const mockService = {
  createBoard: jest.fn(),
};

const mockPageNationHelper = {
  getPaginationItems: jest.fn(),
};

describe('BoardsController', () => {
  let controller: BoardsController;
  let service: BoardsService;

  const requestUserInfo: Partial<User> = {
    userId: faker.datatype.number(),
    email: faker.internet.email(),
    nickname: faker.internet.userName(),
    password: faker.internet.password(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardsController],
      providers: [
        {
          provide: BoardsService,
          useValue: mockService,
        },
        {
          provide: WINSTON_MODULE_PROVIDER,
          useValue: mockWinston,
        },
        {
          provide: PaginationHelper,
          useValue: mockPageNationHelper,
        },
      ],
    }).compile();

    controller = module.get<BoardsController>(BoardsController);
    service = module.get<BoardsService>(BoardsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create-Board', () => {
    it('should return success property and boardId', async () => {
      // given
      const requestUser = {
        id: faker.datatype.number(),
        email: faker.internet.email(),
        nickname: faker.internet.userName(),
        password: faker.internet.password(),
      };
      const boardCreateDto: BoardCreateDto = {
        title: faker.name.title(),
        content: faker.lorem.sentences(),
      };

      const successResponse = {
        success: true,
        data: {
          boardId: faker.datatype.number(),
        },
      };

      service.createBoard = jest.fn().mockReturnValueOnce(successResponse);

      // when
      const result = await controller.createBoard(requestUser, boardCreateDto);

      // then
      expect(result).toStrictEqual(successResponse);
    });
  });

  describe('Get-Single-Board', () => {
    it('should return single board', async () => {
      // given
      const id: number = faker.datatype.number({ min: 1 });
      const writerInfo: User = {} as any;

      const successGetSingleBoardInfo = {
        id,
        title: faker.name.title(),
        content: faker.lorem.sentences(),
        createdAt: faker.date.recent(),
        updateAt: faker.date.recent(-1),
        deletedAt: null,
        user: writerInfo,
      };

      service.getSingleBoard = jest
        .fn()
        .mockReturnValueOnce(successGetSingleBoardInfo);

      // when
      const result = await controller.getSingleBoard(id);

      // then
      expect(result).toStrictEqual(successGetSingleBoardInfo);
    });
  });

  describe('Get-All-Board', () => {
    it('should return success property and count and all-board-data', async () => {
      // given
      const limit = faker.datatype.number(30);
      const offset = faker.datatype.number(30 * limit);
      const query = {
        limit,
        offset,
      };

      const successData = {
        count: limit,
        data: [
          {
            id: faker.datatype.number(),
            title: faker.lorem.sentence(),
            content: faker.lorem.sentences(),
          },
        ],
      };
      service.getAllBoard = jest.fn().mockResolvedValueOnce(successData);

      // when
      const result = await controller.getAllBoard(query as any);

      // then
      expect(result).toStrictEqual(successData);
    });
  });

  describe('Update-Board', () => {
    it('should be return success property and updated board id', async () => {
      // given
      const boardIdFromParam: number = faker.datatype.number();
      const updateRequestDto: BoardUpdateDto = {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
      };

      const successUpdatedResponse = {
        success: true,
        updatedBoardId: boardIdFromParam,
      };

      service.updateBoard = jest
        .fn()
        .mockResolvedValueOnce(successUpdatedResponse);

      // when
      const result = await controller.updateBoard(
        requestUserInfo as any,
        boardIdFromParam,
        updateRequestDto,
      );
      // then
      expect(result).toStrictEqual(successUpdatedResponse);
    });
  });

  describe('Delete-Board', () => {
    it('should return success property and deleted board-id', async () => {
      // given
      const boardIdFromParam: number = faker.datatype.number();

      const successDeletedResponse = {
        success: true,
        deletedBoardId: boardIdFromParam,
      };

      service.deleteBoard = jest
        .fn()
        .mockResolvedValueOnce(successDeletedResponse);

      // when
      const result = await controller.deleteBoard(
        requestUserInfo as any,
        boardIdFromParam,
      );

      // then
      expect(result).toStrictEqual(successDeletedResponse);
    });
  });

  describe('Get-BoardList-SpecificUser', () => {
    it('should return boardList if userId is valid value', () => {
      // given
      const validUserId = faker.datatype.number();

      const board: NotIncludeUserInfoResponse = {
        title: faker.lorem.sentence(),
        content: faker.lorem.sentences(),
      } as any;

      const boardList = [board];

      const successResponse = {
        success: true,
        data: {
          userId: validUserId,
          boardList,
        },
      };

      service.getBoardListSpecificUser = jest
        .fn()
        .mockResolvedValueOnce(successResponse);
      // when

      const result = controller.getBoardListSpecificUser(validUserId);

      // then

      expect(result).resolves.toStrictEqual(successResponse);
    });
  });
});
