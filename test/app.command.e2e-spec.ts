import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Connection, QueryRunner } from 'typeorm';
import { AppModule } from '../src/app.module';

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
});
