import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e) Query', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/boards/:boardId (GET)', async () => {
    const result = await request(app.getHttpServer()).get('/boards/1');

    expect(result.body.success).toBeTruthy();
  });

  it('/boards?page&limit (GET)', async () => {
    const result = await request(app.getHttpServer()).get(
      '/boards?page=1&limit=20',
    );
    expect(result.body.pageSize).toBeTruthy();
  });

  it('/boards/user?id (GET)', async () => {
    const result = await request(app.getHttpServer()).get('/boards/user?id=1');
    expect(result.body.success).toBeTruthy();
  });

  it('/users?page&limit (GET)', async () => {
    const result = await request(app.getHttpServer()).get(
      '/users?page=1&limit=20',
    );
    expect(result.body.pageSize).toBeTruthy();
  });

  it('/users/:userId (GET)', async () => {
    const result = await request(app.getHttpServer()).get('/users/3');
    expect(result.body.success).toBeTruthy();
  });
});
