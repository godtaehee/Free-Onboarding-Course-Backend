import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Connection, QueryRunner } from 'typeorm';
import { AppModule } from '../src/app.module';
import * as faker from 'faker';

describe('AppController (e2e) [COMMAND]', () => {
  let app: INestApplication;
  let queryRunner: QueryRunner;
  let accessToken: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();

    const dbConnection = moduleFixture.get(Connection);

    queryRunner = dbConnection.createQueryRunner('master');

    if (!accessToken) {
      const result = await request(app.getHttpServer())
        .post('/auth/sign-in')
        .send({
          email: 'test@gmail.com',
          password: 'wecode1234',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);
      accessToken = result.body.data.accessToken;
    }

    await queryRunner.startTransaction();
  });

  afterEach(async () => {
    await queryRunner.rollbackTransaction();
  });

  describe('auth', () => {
    it('/auth/sign-up (POST)', async () => {
      // given
      // when
      const result = await request(app.getHttpServer())
        .post('/auth/sign-up')
        .send({
          email: faker.internet.email(),
          nickname: faker.internet.userName(),
          password: faker.internet.password(),
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

      // then
      expect(result.body.success).toBeTruthy();
    });
  });

  describe('boards', () => {
    it('/boards/create (POST)', async () => {
      // given
      // when
      const result = await request(app.getHttpServer())
        .post('/boards/create')
        .set('Authorization', 'bearer ' + accessToken)
        .send({
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

      // then
      expect(result.body.success).toBeTruthy();
    });

    it('/boards/:boardId (PATCH)', async () => {
      // given
      // when
      const result = await request(app.getHttpServer())
        .patch('/boards/1')
        .set('Authorization', 'bearer ' + accessToken)
        .send({
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

      // then
      expect(result.body.success).toBeTruthy();
    });

    it('/boards/:boardId (DELETE)', async () => {
      // given
      // when
      const result = await request(app.getHttpServer())
        .delete('/boards/1')
        .set('Authorization', 'bearer ' + accessToken)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

      // then
      expect(result.body.success).toBeTruthy();
    });
  });
});
