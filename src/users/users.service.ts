import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign.up.dto';

@Injectable()
export class UsersService {
  signUp(signUpDto: SignUpDto) {}
}
