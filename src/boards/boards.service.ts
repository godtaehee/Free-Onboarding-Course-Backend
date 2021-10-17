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

  async updateBoard(
    userId: number,
    boardId: number,
    updateRequestBody: BoardUpdateDto,
  ) {
    const selectedBoard = await this.boardsRepository.getBoardSpecificUser(
      userId,
      boardId,
    );

    if (!selectedBoard)
      throw new UnauthorizedException('해당 게시글을 작성하신 분이 아닙니다.');

    return this.boardsRepository.updateBoard(selectedBoard, updateRequestBody);
  }
}
