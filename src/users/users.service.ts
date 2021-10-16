import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign.up.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { UtilsHelper } from '../common/utils/utils.helper';
import { SignInDto } from './dto/sign.in.dto';

@Injectable()
export class UsersService {
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
