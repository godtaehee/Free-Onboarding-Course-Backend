import {
  Body,
  Controller,
  Inject,
  Post,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { SignUpDto } from './dto/sign.up.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign.in.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { RequestAboutUserSuccessResponse } from '../common/response/user/request.about.user.success.response';
import { SignInSuccessResponse } from '../common/response/user/sign.in.success.response';
import { CommonResponseFormInterceptor } from '../common/interceptors/common.response.form.interceptor';
import { ApiCommonCreateResponseForm } from '../common/decorators/api.common.create.response.form';
import { FourHundredError } from '../common/response/error/four.hundred.error';
import { SignInFailError } from '../common/response/error/sign.in.fail.error';

@UseInterceptors(CommonResponseFormInterceptor)
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
      '회원 가입할 때 이메일, 닉네임, 패스워드를 입력받습니다. ' +
      '회원가입을 하지 않아도 게시글을 볼 수는 있습니다. ' +
      '하지만 회원가입을 해야 게시글을 작성, 수정, 삭제를 할 수 있습니다. ',
  })
  @ApiCommonCreateResponseForm(RequestAboutUserSuccessResponse, {
    description: '회원가입 성공 시의 응답입니다.',
  })
  @ApiBadRequestResponse({
    type: FourHundredError,
    description:
      '해당 예시에 나와 있는 오류중에 적어도 한 개의 조건에 맞지 않아 요청이 실패했습니다.',
  })
  @Post('sign-up')
  signUp(
    @Body(ValidationPipe) signUpDto: SignUpDto,
  ): Promise<RequestAboutUserSuccessResponse> {
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
      '로그인할 때 이메일, 패스워드를 입력받습니다. ' +
      '로그인 후 게시글 작성, 수정, 삭제를 위한 JWT 기반의 Access-Token을 반환받습니다. ' +
      '로그인 후 이 토큰을 이용해야만 게시글을 작성, 수정, 삭제를 할 수 있습니다. ' +
      '토큰은 1시간 뒤 만료됩니다.',
  })
  @ApiCommonCreateResponseForm(SignInSuccessResponse, {
    description: '성공적으로 Access Token을 발급 받았을 때의 응답입니다.',
  })
  @ApiBadRequestResponse({
    type: FourHundredError,
    description:
      '해당 예시에 나와 있는 오류중에 적어도 한 개의 조건에 맞지 않아 요청이 실패했습니다.',
  })
  @ApiUnauthorizedResponse({
    type: SignInFailError,
    description: '입력된 정보가 알맞지 않아 로그인에 실패했습니다.',
  })
  @Post('sign-in')
  signIn(
    @Body(ValidationPipe) signInDto: SignInDto,
  ): Promise<SignInSuccessResponse> {
    this.logger.debug(
      `${this.tag} ${new Date().toLocaleString()} '${
        signInDto.email
      }' request sign-in`,
    );
    return this.authService.signIn(signInDto);
  }
}
