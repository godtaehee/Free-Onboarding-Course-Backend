import { EntityRepository, Repository } from 'typeorm';
import { User } from './users.entity';
import { SignUpDto } from './dto/sign.up.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async signUp(signUpDto: SignUpDto) {
    const createdUser = this.create(signUpDto);
    try {
      const savedUser = await this.save(createdUser);
      return {
        success: true,
        id: savedUser.id,
      };
    } catch (err) {
      throw err;
    }
  }
}
