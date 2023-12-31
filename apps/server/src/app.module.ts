import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import environment from '../config/env.config';
import { TrpcModule } from './trpc/trpc.module';
import { TrpcService } from './trpc/trpc.service';
import { TrpcRouter } from './trpc/trpc.router';
import { CommitsModule } from './commits/commits.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        load: [environment],
        isGlobal: true,
      }
    ),
    TrpcModule,
    CommitsModule,
  ],
  controllers: [AppController],
  providers: [AppService, TrpcService, TrpcRouter],
})
export class AppModule { }
