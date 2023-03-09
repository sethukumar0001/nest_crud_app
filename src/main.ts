// https://www.freecodecamp.org/news/build-web-apis-with-nestjs-beginners-guide/
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
