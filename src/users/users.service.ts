import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersQueryRepository } from './users.query.repository';
import { BoardsQueryRepository } from '../boards/boards.query.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersQueryRepository)
    private usersQueryRepository: UsersQueryRepository,
    @InjectRepository(BoardsQueryRepository)
    private boardsQueryRepository: BoardsQueryRepository,
  ) {}

  async getSingleUserInfo(userId: number) {
    const singleUserInfo = await this.usersQueryRepository.getSingleUserInfo(
      userId,
    );
    if (!singleUserInfo)
      throw new UnauthorizedException('요청을 처리할수 없습니다.');

    const boardList = await this.boardsQueryRepository.getBoardListSpecificUser(
      userId,
    );

    if (boardList) {
      singleUserInfo.boards = boardList;
      return singleUserInfo;
    } else {
      return singleUserInfo;
    }
  }
}
