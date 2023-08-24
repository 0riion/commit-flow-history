import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// TODO: add port to env
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
