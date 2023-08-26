import { Injectable } from '@nestjs/common';
import { TrpcService } from 'src/trpc/trpc.service';
import { data } from './data';

@Injectable()
export class CommitsService extends TrpcService {
    commits = data;

    getCommits(repo: string, owner: string) {
        console.log(repo, owner)
        return this.commits;
    }
}
