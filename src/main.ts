import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  server = await app.listen(3000);
}

async function closeServer() {
  if (server) {
    await server.close();
  }
}

bootstrap();

export { closeServer };
