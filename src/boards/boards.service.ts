import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardsRepository } from './boards.repository';
import { BoardCreateDto } from './dto/board.create.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardsRepository)
    private boardsRepository: BoardsRepository,
  ) {}

  createBoard(user, boardCreateDto: BoardCreateDto) {
    return this.boardsRepository.createBoard(user, boardCreateDto);
  }

  getSingleBoard(id: number) {
    return this.boardsRepository.getSingleBoard(id);
  }
}
