import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignUpDto } from './dto/sign.up.dto';
import { SignInDto } from './dto/sign.in.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('sign-up')
  signUp(@Body(ValidationPipe) signUpDto: SignUpDto) {
    return this.usersService.signUp(signUpDto);
  }

  @Post('sign-in')
  signIn(signInDto: SignInDto) {
    return this.usersService.signIn(signInDto);
  }
}
