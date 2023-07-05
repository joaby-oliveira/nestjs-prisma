import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { BookModule } from './book.module';
import { BookService } from './book.service';

describe('Cats', () => {
  let app: INestApplication;
  const bookService = { create: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [BookModule],
    })
      .overrideProvider(BookService)
      .useValue(bookService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST book`, () => {
    return request(app.getHttpServer()).post('/book').expect(200).expect({
      data: bookService.create(),
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
