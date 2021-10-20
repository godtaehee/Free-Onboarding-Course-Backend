import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersQueryRepository } from './users.query.repository';
import { BoardsQueryRepository } from '../boards/boards.query.repository';
import { UserSearchRequest } from './dto/user.search.request';
import { User } from './users.entity';
import { PaginationHelper } from '../common/utils/pagination.helper';
import { UserResponse } from '../common/response/user/user.response';

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
    return this.usersQueryRepository.getSingleUserInfo(userId);
  }

  async getAllUserInfoUsingPagination(userSearchRequest: UserSearchRequest) {
    const [users, count] =
      await this.usersQueryRepository.getAllUserInfoUsingPagination(
        userSearchRequest,
      );

    if (users.length <= 0)
      throw new BadRequestException(`해당 페이지에 유저가 존재하지 않습니다.`);
    return this.paginationHelper.getPaginationItems<UserResponse>(
      count,
      userSearchRequest.limit,
      users.map((u) => new UserResponse(u, u.boards)),
    );
  }
}
