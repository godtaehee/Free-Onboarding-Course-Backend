import { Test, TestingModule } from '@nestjs/testing';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import * as faker from 'faker';
import { BoardCreateDto } from './dto/board.create.dto';

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
});
