import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignUpDto } from './dto/sign.up.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.usersService.signUp(signUpDto);
  }
}
