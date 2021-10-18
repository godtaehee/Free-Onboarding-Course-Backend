import { Body, Controller, Inject, Post, ValidationPipe } from '@nestjs/common';
import { SignUpDto } from './dto/sign.up.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign.in.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('회원가입 & 로그인')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @ApiOperation({
    summary: '회원가입을 합니다.',
    description:
      '회원가입할때 이메일, 닉네임, 패스워드를 입력 받습니다. ' +
      '회원가입을 하지않아도 게시글을 볼수는 있습니다. ' +
      '하지만 회원가입을 해야 게시글을 작성, 수정, 삭제를 할수 있습니다.',
  })
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
