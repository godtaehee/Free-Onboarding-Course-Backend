import {
  BadRequestException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersQueryRepository } from './users.query.repository';
import { BoardsQueryRepository } from '../boards/boards.query.repository';
import { UserSearchRequest } from './dto/user.search.request';
import { User } from './users.entity';
import { PaginationHelper } from '../common/utils/pagination.helper';
import { UserResponse } from '../common/response/user/user.response';

interface AllUserInfoUsingPagination {
  userSearchRequest: UserSearchRequest;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersQueryRepository)
    private usersQueryRepository: UsersQueryRepository,
    @InjectRepository(BoardsQueryRepository)
    private boardsQueryRepository: BoardsQueryRepository,
    @Inject(PaginationHelper)
    private paginationHelper: PaginationHelper<User>,
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

  async getAllUserInfoUsingPagination(userSearchRequest: UserSearchRequest) {
    const [users, count] =
      await this.usersQueryRepository.getAllUserInfoUsingPagination(
        userSearchRequest,
      );

    if (users.length <= 0)
      throw new BadRequestException(`유저가 존재하지 않습니다.`);
    return this.paginationHelper.getPaginationItems<UserResponse>(
      count,
      userSearchRequest.limit,
      users.map((u) => new UserResponse(u, u.boards)),
    );
  }
}
