import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import { SignUpDto } from './dto/sign.up.dto';
import { SignInDto } from './dto/sign.in.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../users/users.entity';
import { JwtService } from '@nestjs/jwt';
import { SignInSuccessResponse } from '../common/response/user/sign.in.success.response';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    return this.usersRepository.signUp(signUpDto);
  }

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;
    const user: User = await this.usersRepository.signIn(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email };
      const accessToken = this.jwtService.sign(payload);

      const responseBody: SignInSuccessResponse = {
        success: true,
        accessToken,
      };
      return responseBody;
    } else throw new UnauthorizedException('logIn failed');
  }
}
