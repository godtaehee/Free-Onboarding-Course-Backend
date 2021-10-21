import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RequestAboutUserSuccessResponse } from './common/response/user/request.about.user.success.response';
import { SignInSuccessResponse } from './common/response/user/sign.in.success.response';
import { NotIncludeSensitiveInfoBoardResponse } from './common/response/board/not.include.sensitive.info.board.response';
import { CommonBoardResponse } from './common/response/board/common.board.response';
import { FourHundredOneError } from './common/response/error/four.hundred.one.error';
import { FourHundredError } from './common/response/error/four.hundred.error';
import { SignInFailError } from './common/response/error/sign.in.fail.error';
import { NotValidNumberError } from './common/response/error/not.valid.number.error';
import * as morgan from 'morgan';
import { UserResponse } from './common/response/user/user.response';
import { NotIncludeUserInfoResponse } from './common/response/board/not.include.user.info.response';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  const swaggerConfig = new DocumentBuilder()
    .setTitle('[위코드 x 원티드] 백엔드 프리온보딩 선발 과제')
    .setDescription(
      '[위코드 x 원티드] 백엔드 프리온보딩 선발 과제에 대한 API 문서입니다.',
    )
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'Token' },
      'access-token',
    )
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig, {
    extraModels: [
      RequestAboutUserSuccessResponse,
      SignInSuccessResponse,
      NotIncludeSensitiveInfoBoardResponse,
      CommonBoardResponse,
      FourHundredError,
      FourHundredOneError,
      SignInFailError,
      NotValidNumberError,
      UserResponse,
      NotIncludeUserInfoResponse,
    ],
  });

  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
