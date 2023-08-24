import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import environment from '../config/env.config';

const PORT = environment().port || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
