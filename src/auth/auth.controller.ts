import { Body, Controller, Inject, Post, ValidationPipe } from '@nestjs/common';
import { SignUpDto } from './dto/sign.up.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign.in.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterSuccessResponse } from '../common/response/user/register.success.response';
import { SignInSuccessResponse } from '../common/response/user/sign.in.success.response';

@ApiTags('회원가입 & 로그인')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    this.tag = '[AuthController]';
  }

  tag: string;
  @ApiOperation({
    summary: '회원가입을 합니다.',
    description:
      '회원가입할때 이메일, 닉네임, 패스워드를 입력 받습니다. ' +
      '회원가입을 하지않아도 게시글을 볼수는 있습니다. ' +
      '하지만 회원가입을 해야 게시글을 작성, 수정, 삭제를 할수 있습니다.',
  })
  @ApiResponse({
    status: 201,
    description: '성공적으로 Board를 가져왔을때의 응답입니다.',
    type: RegisterSuccessResponse,
  })
  @Post('sign-up')
  signUp(@Body(ValidationPipe) signUpDto: SignUpDto) {
    this.logger.debug(
      `${this.tag} ${new Date().toLocaleString()} '${
        signUpDto.email
      }' request sign-up`,
    );
    return this.authService.signUp(signUpDto);
  }

  @ApiOperation({
    summary: '로그인을 합니다.',
    description:
      '로그인할때 이메일, 패스워드를 입력 받습니다. ' +
      '로그인 후 게시글 작성, 수정, 삭제를 위한 JWT 기반의 Access-Token을 반환 받습니다. ' +
      '로그인 후 이 토큰을 이용해야만 게시글을 작성, 수정, 삭제를 할수 있습니다. ' +
      '토큰은 1시간뒤 만료됩니다.',
  })
  @ApiResponse({
    status: 201,
    description: '성공적으로 AccessToken을 발급 받았을때의 응답입니다.',
    type: SignInSuccessResponse,
  })
  @Post('sign-in')
  signIn(@Body(ValidationPipe) signInDto: SignInDto) {
    this.logger.debug(
      `${this.tag} ${new Date().toLocaleString()} '${
        signInDto.email
      }' request sign-in`,
    );
    return this.authService.signIn(signInDto);
  }
}
