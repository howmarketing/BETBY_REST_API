import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('AppModule', () => {
  let app: INestApplication;
  let appController: AppController;
  let appModule: AppModule;
  let moduleFixture: TestingModule;
  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      controllers: [AppController],
      imports: [AppModule],
      providers: [AppService],
    }).compile();

    appController = moduleFixture.get<AppController>(AppController);
    appModule = moduleFixture.get<AppModule>(AppModule);
    app = moduleFixture.createNestApplication();
    await app.init();
  });
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
    it('should return "Module says: Hello World!"', () => {
      expect(appModule.getHello()).toBe('Module says: Hello World!');
    });
    it('/ (GET)', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Hello World!');
    });
    it('should start the server and listen on port 3000', async () => {
      // Arrange
      const port = 3000; // Define the port number
      await app.listen(port); // Start the server and listen on the specified port
      // Add any assertions or checks here if needed
      // For example, you can add assertions to check if the server started successfully
      expect(app.getHttpServer()).toBeDefined();
    });
  });
  afterAll(async () => {
    await app.close();
  });
});
