import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('BETBY REST API')
    .setDescription('The BETBY REST API project')
    .setVersion('1.0')
    .addTag('BETBY')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  server = await app.listen(3000);
}

async function closeServer() {
  if (server) {
    await server.close();
  }
}

bootstrap();

export { closeServer };
