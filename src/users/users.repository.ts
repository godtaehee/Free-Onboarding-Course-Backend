import { EntityRepository, Repository } from 'typeorm';
import { User } from './users.entity';
import { SignUpDto } from './dto/sign.up.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async signUp(signUpDto: SignUpDto) {
    const user = this.create(signUpDto);
    try {
      return await this.save(user);
    } catch (err) {
      throw err;
    }
  }
}
