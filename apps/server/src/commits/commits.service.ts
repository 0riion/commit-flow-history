import { Injectable } from '@nestjs/common';
import { TrpcService } from 'src/trpc/trpc.service';
import { data } from './data';
import axiosInstance from 'libs/axiosInstance';

@Injectable()
export class CommitsService extends TrpcService {
    commits = data;

    async getCommits(
        repo: string,
        owner: string,
        pageIndex?: number,
        pageSize?: number,
        orderBy?: string,
        branch?: string
    ): Promise<any> {
        let url = `/repos/${owner}/${repo}/commits`
        let result = null;

        if (pageIndex && pageSize) {
            url += `?page=${pageIndex}&per_page=${pageSize}`;
        }

        if (branch) {
            if (url.includes('?')) {
                url += `&sha=${branch}`;
            } else {
                url += `?sha=${branch}`;
            }
        }

        const response = await axiosInstance.get(url);
        result = response.data;

        if (orderBy === 'desc') {
            result.reverse();
        }

        return result;
    }
}
