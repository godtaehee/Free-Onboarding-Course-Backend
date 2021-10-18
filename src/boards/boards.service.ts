import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardsRepository } from './boards.repository';
import { BoardCreateDto } from './dto/board.create.dto';
import { BoardUpdateDto } from './dto/board.update.dto';
import { ReadAllBoardResponse } from '../common/response/board/read.all.board.response';
import { CommonBoardResponse } from '../common/response/board/common.board.response';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardsRepository)
    private boardsRepository: BoardsRepository,
  ) {}

  createBoard(user, boardCreateDto: BoardCreateDto) {
    return this.boardsRepository.createBoard(user, boardCreateDto);
  }

  getSingleBoard(boardId: number) {
    return this.boardsRepository.getSingleBoard(boardId);
  }

  async getAllBoard(limit: number, offset: number) {
    const result = await this.boardsRepository.getAllBoard(limit, offset);
    const readAllBoardResponse: ReadAllBoardResponse = {
      success: true,
      count: result.length,
      data: result,
    };
    return readAllBoardResponse;
  }

  async updateBoard(
    userId: number,
    boardId: number,
    updateRequestBody: BoardUpdateDto,
  ) {
    const selectedBoard = await this.confirmValidBoard(userId, boardId);
    return this.boardsRepository.updateBoard(selectedBoard, updateRequestBody);
  }

  async deleteBoard(userId: number, boardId: number) {
    await this.confirmValidBoard(userId, boardId);
    await this.boardsRepository.deleteBoard(boardId);
    const successResponseBody: CommonBoardResponse = {
      boardId,
    };
    return successResponseBody;
  }

  async confirmValidBoard(userId, boardId) {
    const selectedBoard = await this.boardsRepository.getBoardSpecificUser(
      userId,
      boardId,
    );

    if (!selectedBoard)
      throw new UnauthorizedException('해당 요청을 처리할수 없습니다.');

    return selectedBoard;
  }
}
