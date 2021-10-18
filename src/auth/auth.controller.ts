import { Body, Controller, Inject, Post, ValidationPipe } from '@nestjs/common';
import { SignUpDto } from './dto/sign.up.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign.in.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('회원가입 & 로그인')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Post('sign-up')
  signUp(@Body(ValidationPipe) signUpDto: SignUpDto) {
    this.logger.debug(
      `${new Date().toLocaleString()} '${signUpDto.email}' request sign-up`,
    );
    return this.authService.signUp(signUpDto);
  }

  @Post('sign-in')
  signIn(@Body(ValidationPipe) signInDto: SignInDto) {
    this.logger.debug(
      `${new Date().toLocaleString()} '${signInDto.email}' request sign-in`,
    );
    return this.authService.signIn(signInDto);
  }
}
