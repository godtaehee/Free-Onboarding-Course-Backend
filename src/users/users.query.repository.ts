import { EntityRepository, Repository } from 'typeorm';
import { User } from './users.entity';

@EntityRepository(User)
export class UsersQueryRepository extends Repository<User> {
  getSingleUserInfo(userId: number) {}
}
