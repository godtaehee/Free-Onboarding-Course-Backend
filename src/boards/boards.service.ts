import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardsRepository } from './boards.repository';
import { BoardCreateDto } from './dto/board.create.dto';
import { BoardUpdateDto } from './dto/board.update.dto';

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

  getAllBoard(limit: number, offset: number) {
    return this.boardsRepository.getAllBoard(limit, offset);
  }

  async updateBoard(
    userId: number,
    boardId: number,
    updateRequestBody: BoardUpdateDto,
  ) {
    const selectedBoard = await this.confirmValidBoard(userId, boardId);
    return this.boardsRepository.updateBoard(selectedBoard, updateRequestBody);
  }

  async deleteBoard(deleteRequestUserId: number, boardIdFromParam: number) {
    await this.confirmValidBoard(deleteRequestUserId, boardIdFromParam);
    return this.boardsRepository.deleteBoard(boardIdFromParam);
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
