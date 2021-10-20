import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import { SignUpDto } from './dto/sign.up.dto';
import { SignInDto } from './dto/sign.in.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../users/users.entity';
import { JwtService } from '@nestjs/jwt';
import { RegisterSuccessResponse } from '../common/response/user/register.success.response';
import { SignInSuccessResponse } from '../common/response/user/sign.in.success.response';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<RegisterSuccessResponse> {
    return this.usersRepository.signUp(signUpDto);
  }

  async signIn(signInDto: SignInDto): Promise<SignInSuccessResponse> {
    const { email, password } = signInDto;
    const user: User = await this.usersRepository.signIn(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email };
      const accessToken = this.jwtService.sign(payload);

      return { accessToken };
    } else throw new UnauthorizedException('logIn failed');
  }
}
