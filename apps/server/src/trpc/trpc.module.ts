import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { CommitsService } from 'src/commits/commits.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcService, TrpcRouter, CommitsService],
  exports: [TrpcService, TrpcRouter, CommitsService],
})
export class TrpcModule { }