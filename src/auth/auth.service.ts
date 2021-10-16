import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import { SignUpDto } from './dto/sign.up.dto';
import { SignInDto } from './dto/sign.in.dto';
import * as bcrypt from 'bcrypt';
import { UtilsHelper } from '../common/utils/utils.helper';
import { User } from '../users/users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
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

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;
    const user: User = await this.usersRepository.signIn(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    } else throw new UnauthorizedException('logIn failed');
  }
}
