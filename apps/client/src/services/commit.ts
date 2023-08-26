import { Commit } from "../@types/commit.type";
import { getEnv } from "../config";
import { TSort } from "../hooks/useCommonPagination";
import axiosInstance from "../utils/axiosInstance";

const OWNER = getEnv().NEXT_PUBLIC_REPO_OWNER;
const REPO = getEnv().NEXT_PUBLIC_REPO_NAME;

type TGetCommits = () => Promise<Commit[]>;
export const getCommits: TGetCommits = async () => {
    const url = `/repos/${OWNER}/${REPO}/commits`;
    const response = await axiosInstance.get(url);
    return response.data;
}

type TGetCommit = (repo?: string, owner?: string, sha?: string) => Promise<Commit>;

export const getCommit: TGetCommit = async (
    repo = '0riion',
    owner = 'commit-flow-history',
    sha
) => {
    const response = await axiosInstance.get(
        `/repos/${owner}/${repo}/git/commits/${sha}`
    );
    return response.data;
}

type TGetPaginatedCommits = (pageIndex: number, pageSize: number) => Promise<Commit[]>;

export const getPaginatedCommits: TGetPaginatedCommits = async (
    pageIndex = 1,
    pageSize = 5
) => {
    const response = await axiosInstance.get(
        `/repos/${OWNER}/${REPO}/commits?page=${pageIndex}&per_page=${pageSize}`
    );
    return response.data;
};

type TGetCommitTotalCount = () => Promise<number>;

export const getCommitTotalCount: TGetCommitTotalCount = async () => {
    const response = await axiosInstance.get(
        `/repos/${OWNER}/${REPO}/commits`
    );
    return response.data.length;
};

type TGetPaginatedCommitsOrderBy = (
    pageIndex?: number,
    pageSize?: number,
    orderBy?: TSort
) => Promise<Commit[]>;

export const getPaginatedCommitsOrderBy: TGetPaginatedCommitsOrderBy = async (
    pageIndex = 1,
    pageSize = 5,
    orderBy = "asc"
) => {
    const response = await axiosInstance.get(
        `/repos/${OWNER}/${REPO}/commits?page=${pageIndex}&per_page=${pageSize}&order=${orderBy}`
    );

    if (orderBy === "asc") {
        return response.data.reverse();
    }

    return response.data;
};