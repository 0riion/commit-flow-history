import { Injectable } from '@nestjs/common';
import { TrpcService } from '../trpc/trpc.service';
import axiosInstance from '../../libs/axiosInstance';

@Injectable()
export class CommitsService extends TrpcService {

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

    async getAllBranchs(repo: string, owner: string): Promise<any> {
        const url = `/repos/${owner}/${repo}/branches`;
        const response = await axiosInstance.get(url);
        return response.data;
    }
}
