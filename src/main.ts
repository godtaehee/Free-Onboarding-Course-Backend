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
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger: Logger = new Logger('main.ts');

  const port = process.env.PORT || 3000;

  app.use(morgan('dev'));

  const swaggerConfig = new DocumentBuilder()
    .setTitle('[위코드 x 원티드] 백엔드 프리온보딩 선발 과제')
    .setDescription(
      `<ul>
        <li>[위코드 x 원티드] 백엔드 프리온보딩 선발 과제에 대한 API 문서입니다. </li> <br/>
        <li>In-Memory Database 확인용 태그에 있는 API를 사용하여 database에 저장된, 혹은 저장이 될 데이터들을 JSON 형태의 데이터로 직접 확인하실 수 있습니다. </li> <br/>
        <li>현재 유저 20명, 게시글 200개 정도의 데이터가 Database에 저장되어 있습니다.</li> <br/>
        <li>대부분의 API는 미리 준비되어있는 데이터로 이용 가능합니다.</li>
       </ul>`,
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

  await app.listen(3000, () => {
    logger.log(
      `http://localhost:${port} 에서 서버가 시작되었습니다. ` +
        `애플리케이션의 API 문서는 http://localhost:${process.env.PORT}/api 에서 확인하실 수 있습니다.`,
    );
  });
}
bootstrap();
