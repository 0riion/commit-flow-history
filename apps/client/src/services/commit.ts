// TODO: add to environment variables repo and owner
import { Commit } from "../@types/commit.type";
import axiosInstance from "../utils/axiosInstance";

const OWNER = '0riion';
const REPO = 'commit-flow-history';

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

type TGetPaginatedCommits = (page: number, perPage: number) => Promise<Commit[]>;

export const getPaginatedCommits: TGetPaginatedCommits = async (
    page = 1,
    perPage = 10
) => {
    const response = await axiosInstance.get(
        `/repos/${OWNER}/${REPO}/commits?page=${page}&per_page=${perPage}`
    );
    return response.data;
};

