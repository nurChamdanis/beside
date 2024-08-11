import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import request = require('supertest');
import { INestApplication } from '@nestjs/common';

describe('App E2E Tests', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!'); // Change this to match your actual response
  });

  afterAll(async () => {
    await app.close();
  });
});
