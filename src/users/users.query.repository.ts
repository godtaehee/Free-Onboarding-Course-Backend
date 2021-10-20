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
    const coveringIndexQueryBuilder = this.createQueryBuilder('covers')
      .select('covers.id')
      .orderBy('covers.id', 'DESC')
      .limit(userSearchRequest.getLimit())
      .offset(userSearchRequest.getOffset());

    return this.createQueryBuilder('users')
      .innerJoin(
        `(${coveringIndexQueryBuilder.getQuery()})`,
        'covers',
        'users.id = covers.id',
      )
      .leftJoinAndSelect('users.boards', 'boards')
      .select(['boards', 'users'])
      .getManyAndCount();
  }
}
