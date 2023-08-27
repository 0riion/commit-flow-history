import { INestApplication, Injectable } from '@nestjs/common';
import { z } from 'zod';
import { TrpcService } from './trpc.service';
import * as trpcExpress from '@trpc/server/adapters/express';
import { CommitsService } from 'src/commits/commits.service';

@Injectable()
export class TrpcRouter {
    constructor(
        private readonly trpc: TrpcService,
        private readonly commitsService: CommitsService,
    ) { }

    appRouter = this.trpc.router({
        hello: this.trpc.procedure
            .input(
                z.object({
                    name: z.string().optional(),
                }),
            )
            .query(({ input }) => {
                const { name } = input;
                return {
                    greeting: `Hello ${name ? name : `World!`}`,
                };
            }),
        commits: this.trpc.procedure
            .input(z.object({
                repo: z.string(),
                owner: z.string(),
                pageIndex: z.number().optional(),
                pageSize: z.number().optional(),
                orderBy: z.string().optional(),
                branch: z.string().optional(),
            }))
            .query(({ input }) => {
                const { repo, owner, pageIndex, pageSize, orderBy, branch } = input;
                return this.commitsService.getCommits(repo, owner, pageIndex, pageSize, orderBy, branch);
            }),
        branches: this.trpc.procedure
            .input(z.object({
                repo: z.string(),
                owner: z.string(),
            }))
            .query(({ input }) => {
                const { repo, owner } = input;
                return this.commitsService.getAllBranchs(repo, owner);
            }),
    });

    async applyMiddleware(app: INestApplication) {
        app.use(
            `/trpc`,
            trpcExpress.createExpressMiddleware({
                router: this.appRouter,
            }),
        );
    }
}

export type AppRouter = TrpcRouter[`appRouter`];

