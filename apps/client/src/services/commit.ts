import { getEnv } from "../config";
import axiosInstance from "../utils/axiosInstance";
import {
    TGetCommit,
    TGetCommitTotalCount,
    TGetCommits,
    TGetPaginatedCommits,
    TGetPaginatedCommitsOrderBy
} from "../@types/services.type";

const OWNER = getEnv().NEXT_PUBLIC_REPO_OWNER;
const REPO = getEnv().NEXT_PUBLIC_REPO_NAME;

export const getCommits: TGetCommits = async () => {
    const url = `/repos/${OWNER}/${REPO}/commits`;
    const response = await axiosInstance.get(url);
    return response.data;
}

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

export const getPaginatedCommits: TGetPaginatedCommits = async (
    pageIndex = 1,
    pageSize = 5
) => {
    const response = await axiosInstance.get(
        `/repos/${OWNER}/${REPO}/commits?page=${pageIndex}&per_page=${pageSize}`
    );
    return response.data;
};

export const getCommitTotalCount: TGetCommitTotalCount = async () => {
    const response = await axiosInstance.get(
        `/repos/${OWNER}/${REPO}/commits`
    );
    return response.data.length;
};



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
