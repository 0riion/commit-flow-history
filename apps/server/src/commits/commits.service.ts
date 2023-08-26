import { Injectable } from '@nestjs/common';
import { TrpcService } from 'src/trpc/trpc.service';
import { data } from './data';
import axiosInstance from 'libs/axiosInstance';

@Injectable()
export class CommitsService extends TrpcService {
    commits = data;

    async getCommits(repo: string, owner: string, page: number, per_page: number, order: string): Promise<any> {
        const url = `/repos/${owner}/${repo}/commits`

        if (page && per_page) {
            const response = await axiosInstance.get(url, {
                params: {
                    page,
                    per_page
                }
            });
            return response.data;
        }

        if (order === 'desc') {
            const response = await axiosInstance.get(url);
            return response.data.reverse();
        };

        const { data } = await axiosInstance.get(`/repos/${owner}/${repo}/commits`);
        return data;
    }
}
