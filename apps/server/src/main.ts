import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import environment from '../config/env.config';
import { TrpcRouter } from './trpc/trpc.router';

const PORT = environment().port || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);
  await app.listen(PORT);
}
bootstrap();
