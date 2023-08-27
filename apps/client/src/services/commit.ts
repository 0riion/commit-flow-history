import { getEnv } from "../config";
import {
    TGetCommit,
    TGetCommitTotalCount,
    TGetCommits,
    TGetPaginatedCommits,
    TGetPaginatedCommitsOrderBy
} from "../@types/services.type";
import { trpc } from "../utils/trpc";
import { Branch } from "../@types/branch.type";
import log from '../utils/logger';

const OWNER = getEnv().NEXT_PUBLIC_REPO_OWNER || '0riion';
const REPO = getEnv().NEXT_PUBLIC_REPO_NAME || 'commit-flow-history';

export const getCommits: TGetCommits = async () => {

    const commits = await trpc.commits.query({
        repo: REPO,
        owner: OWNER,
    });

    log.debug('getCommits', commits);
    return commits;
}

export const getCommit: TGetCommit = async () => {

    const commits = await trpc.commits.query({
        repo: REPO,
        owner: OWNER,
    });

    log.debug('getCommits', commits);
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

    log.debug('getPaginatedCommits', commits);
    return commits;
};

export const getCommitTotalCount: TGetCommitTotalCount = async () => {

    const commits = await trpc.commits.query({
        repo: REPO,
        owner: OWNER,
    });

    log.debug('getCommitTotalCount', commits.length);
    return commits.length;
};



export const getPaginatedCommitsOrderBy: TGetPaginatedCommitsOrderBy = async (
    pageIndex = 1,
    pageSize = 5,
    orderBy = "asc",
    branch = "main"
) => {
    const commits = await trpc.commits.query({
        repo: REPO,
        owner: OWNER,
        pageIndex,
        pageSize,
        orderBy,
        branch,
    });

    log.debug('getPaginatedCommitsOrderBy', commits);
    return commits;
};

type TGetAllBranchs = () => Promise<Branch[]>;

export const getAllBranchs: TGetAllBranchs = async () => {
    const branches = await trpc.branches.query({
        repo: REPO,
        owner: OWNER,
    });

    log.debug('getAllBranchs', branches);
    return branches;
};
