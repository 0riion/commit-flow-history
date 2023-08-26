import { getEnv } from "../config";
import {
    TGetCommit,
    TGetCommitTotalCount,
    TGetCommits,
    TGetPaginatedCommits,
    TGetPaginatedCommitsOrderBy
} from "../@types/services.type";
import { trpc } from "../utils/trpc";

const OWNER = getEnv().NEXT_PUBLIC_REPO_OWNER || '0riion';
const REPO = getEnv().NEXT_PUBLIC_REPO_NAME || 'commit-flow-history';

export const getCommits: TGetCommits = async () => {

    const commits = await trpc.commits.query({
        repo: REPO,
        owner: OWNER,
    });

    return commits;
}

export const getCommit: TGetCommit = async () => {

    const commits = await trpc.commits.query({
        repo: REPO,
        owner: OWNER,
    });

    return commits;
}

export const getPaginatedCommits: TGetPaginatedCommits = async (
    pageIndex = 1,
    pageSize = 5
) => {

    const commits = await trpc.commits.query({
        repo: REPO,
        owner: OWNER,
        pageIndex: pageIndex,
        pageSize: pageSize,
    });

    return commits;
};

export const getCommitTotalCount: TGetCommitTotalCount = async () => {

    const commits = await trpc.commits.query({
        repo: REPO,
        owner: OWNER,
    });

    return commits.length;
};



export const getPaginatedCommitsOrderBy: TGetPaginatedCommitsOrderBy = async (
    pageIndex = 1,
    pageSize = 5,
    orderBy = "asc"
) => {
    const commits = await trpc.commits.query({
        repo: REPO,
        owner: OWNER,
        pageIndex,
        pageSize,
        orderBy,
    });

    return commits;
};
