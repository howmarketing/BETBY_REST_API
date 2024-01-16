import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { AppService } from './app.service';

describe('AppModule', () => {
  let appController: AppController;
  let appModule: AppModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      imports: [AppModule],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appModule = app.get<AppModule>(AppModule);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
    it('should return "Module says: Hello World!"', () => {
      expect(appModule.getHello()).toBe('Module says: Hello World!');
    });
  });
});
