import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Connection, QueryRunner } from 'typeorm';
import { AppModule } from '../src/app.module';
import * as faker from 'faker';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let queryRunner: QueryRunner;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();

    const dbConnection = moduleFixture.get(Connection);

    queryRunner = dbConnection.createQueryRunner('master');
  });

  it('should be succeed cycle', async () => {
    // given

    const email = faker.internet.email();
    const nickname = faker.internet.userName();
    const password = faker.internet.password();

    try {
      await queryRunner.startTransaction();

      // 회원가입
      const signUpResult = await request(app.getHttpServer())
        .post('/auth/sign-up')
        .send({
          email,
          nickname,
          password,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

      expect(signUpResult.body.success).toBeTruthy();

      // 로그인
      const signInResult = await request(app.getHttpServer())
        .post('/auth/sign-in')
        .send({
          email,
          password,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

      expect(signInResult.body.data.accessToken).toBeTruthy();

      const accessToken = signInResult.body.data.accessToken;

      // 게시글 생성
      const createBoardResult = await request(app.getHttpServer())
        .post('/boards/create')
        .set('Authorization', 'bearer ' + accessToken)
        .send({
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

      expect(createBoardResult.body.success).toBeTruthy();

      const createdBoardNumber = createBoardResult.body.data.boardId;

      // 방금 만든 게시글 보기
      const getSingleBoardResult = await request(app.getHttpServer()).get(
        `/boards/${createdBoardNumber}`,
      );

      expect(getSingleBoardResult.body.success).toBeTruthy();

      // 1번째 페이지 20개 제한으로 보기
      const getAllBoardResult = await request(app.getHttpServer()).get(
        '/boards?offset=1&limit=20',
      );
      expect(getAllBoardResult.body.pageSize).toBeTruthy();

      // 방금 만든 게시글 업데이트
      const updateBoardResult = await request(app.getHttpServer())
        .patch(`/boards/${createdBoardNumber}`)
        .set('Authorization', 'bearer ' + accessToken)
        .send({
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

      expect(updateBoardResult.body.success).toBeTruthy();

      // 방금 만든 게시글 삭제
      const deleteBoardResult = await request(app.getHttpServer())
        .delete(`/boards/${createdBoardNumber}`)
        .set('Authorization', 'bearer ' + accessToken)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

      expect(deleteBoardResult.body.success).toBeTruthy();

      await queryRunner.rollbackTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    }
  });
});
