import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { Connection, QueryRunner } from 'typeorm';
import { AppModule } from '../src/app.module';

describe('AppController (e2e) [COMMAND]', () => {
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

    await queryRunner.startTransaction();
  });

  afterEach(async () => {
    await queryRunner.rollbackTransaction();
  });
});
