import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  server = await app.listen(3000);
}

async function closeServer() {
  if (server) {
    await server.close();
  }
}

bootstrap();

export { closeServer };
