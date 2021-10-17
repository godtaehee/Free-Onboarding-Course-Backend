import { Test, TestingModule } from '@nestjs/testing';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import * as faker from 'faker';
import { BoardCreateDto } from './dto/board.create.dto';
import { User } from '../users/users.entity';
import { BoardUpdateDto } from './dto/board.update.dto';

const mockWinston = {
  debug: jest.fn(),
};

const mockService = {
  createBoard: jest.fn(),
};

describe('BoardsController', () => {
  let controller: BoardsController;
  let service: BoardsService;

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
        boardId: faker.datatype.number(),
      };

      service.createBoard = jest.fn().mockReturnValueOnce(successResponse);

      // when
      const result = await controller.createBoard(requestUser, boardCreateDto);

      // then
      expect(result).toBe(successResponse);
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
      expect(result).toBe(successGetSingleBoardInfo);
    });
  });

  describe('Update-Board', () => {
    it('should be return success property and updated board id', async () => {
      // given
      const updateRequestUserId: number = faker.datatype.number();
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
        updateRequestUserId,
        boardIdFromParam,
        updateRequestDto,
      );
      // then
      expect(result).toBe(successUpdatedResponse);
    });
  });

  describe('Delete-Board', () => {
    it('should return success property and deleted board-id', async () => {
      // given
      const deleteRequestUserId: number = faker.datatype.number();
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
        deleteRequestUserId,
        boardIdFromParam,
      );

      // then
      expect(result).toBe(successDeletedResponse);
    });
  });
});
