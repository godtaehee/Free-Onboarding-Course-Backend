import { EntityRepository, Repository } from 'typeorm';
import { User } from './users.entity';
import { SignUpDto } from '../auth/dto/sign.up.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async signUp(signUpDto: SignUpDto) {
    const createdUser = this.create(signUpDto);
    try {
      const savedUser = await this.save(createdUser);
      return {
        userId: savedUser.id,
      };
    } catch (err) {
      throw err;
    }
  }

  async signIn(email: string) {
    return this.findOne({ email });
  }
}
