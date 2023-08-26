import { Module } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Module({
  imports: [],
  controllers: [],
  providers: [CommitsService],
})
export class CommitsModule { }
