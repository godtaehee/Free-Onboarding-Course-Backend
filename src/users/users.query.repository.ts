import { EntityRepository, Repository } from 'typeorm';
import { User } from './users.entity';

@EntityRepository(User)
export class UsersQueryRepository extends Repository<User> {
  getSingleUserInfo(userId: number) {
    return this.createQueryBuilder('users').where({ id: userId }).getOne();
  }
}
