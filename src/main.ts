import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RegisterSuccessResponse } from './common/response/user/register.success.response';
import { SignInSuccessResponse } from './common/response/user/sign.in.success.response';
import { NotInclueSensitiveBoardInfoResponse } from './common/response/board/not.inclue.sensitive.board.info.response';
import { CommonBoardResponse } from './common/response/board/common.board.response';
import { FourHundredOneError } from './common/response/error/four.hundred.one.error';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
      RegisterSuccessResponse,
      SignInSuccessResponse,
      NotInclueSensitiveBoardInfoResponse,
      CommonBoardResponse,
      FourHundredOneError,
    ],
  });

  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
