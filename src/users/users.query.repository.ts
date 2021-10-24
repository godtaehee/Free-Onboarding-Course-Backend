import { EntityRepository, Repository } from 'typeorm';
import { User } from './users.entity';
import { UserSearchRequest } from './dto/user.search.request';

@EntityRepository(User)
export class UsersQueryRepository extends Repository<User> {
  getSingleUserInfo(userId: number): Promise<User> {
    return this.createQueryBuilder('user')
      .leftJoinAndSelect('user.boards', 'boards')
      .where('user.id = :userId', { userId })
      .getOne();
  }

  async getAllUserInfoUsingPagination(
    userSearchRequest: UserSearchRequest,
  ): Promise<[User[], number]> {
    const paginationUsers = this.getPaginationUsers(
      userSearchRequest.getOffset(),
      userSearchRequest.getLimit(),
    );

    if (userSearchRequest.getOffset() === 0) {
      const fixedPageCount = 10 * userSearchRequest.getLimit();
      return [await paginationUsers, fixedPageCount];
    }

    const totalCount = await this.createQueryBuilder('covers')
      .select(['covers.userId'])
      .getCount();

    if (totalCount > userSearchRequest.getOffset()) {
      return [await paginationUsers, totalCount];
    }

    return [
      await this.getPaginationUsers(
        Math.floor(totalCount / userSearchRequest.getLimit()) *
          userSearchRequest.getLimit(),
        userSearchRequest.getLimit(),
      ),
      totalCount,
    ];
  }

  getCoveringIndexQueryBuilder(offset: number, limit: number) {
    return this.createQueryBuilder('covers')
      .select(['covers.userId'])
      .orderBy('covers.userId', 'DESC')
      .limit(limit)
      .offset(offset);
  }

  getPaginationUsers(offset: number, limit: number) {
    return this.createQueryBuilder('users')
      .innerJoin(
        `(${this.getCoveringIndexQueryBuilder(offset, limit).getQuery()})`,
        'covers',
        'users.userId = covers_id',
      )
      .leftJoinAndSelect('users.boards', 'boards')
      .select(['boards', 'users'])
      .getMany();
  }
}
