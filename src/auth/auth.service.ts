import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/users.entity';
import { UsersRepository } from '../users/users.repository';
import { SignUpDto } from './dto/sign.up.dto';
import { SignInDto } from './dto/sign.in.dto';
import * as bcrypt from 'bcrypt';
import { UtilsHelper } from '../common/utils/utils.helper';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    private utilsHelper: UtilsHelper<SignUpDto>,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const { password } = signUpDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    let clonedSignUpDto = this.utilsHelper.getDeepCloneObject(signUpDto);
    clonedSignUpDto.password = hashedPassword;
    return this.usersRepository.signUp(clonedSignUpDto);
  }

  signIn(signInDto: SignInDto) {}
}
