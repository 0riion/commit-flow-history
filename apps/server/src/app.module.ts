import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import environment from '../config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        load: [environment],
        isGlobal: true,
      }
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
