import { TSort } from "../hooks/useCommonPagination";
import { Commit } from "./commit.type";

export type TGetCommits = () => Promise<Commit[]>;

export type TGetCommit = (
    repo?: string,
    owner?: string,
) => Promise<Commit>;

export type TGetPaginatedCommits = (
    pageIndex: number,
    pageSize: number
) => Promise<Commit[]>;

export type TGetCommitTotalCount = () => Promise<number>;

export type TGetPaginatedCommitsOrderBy = (
    pageIndex?: number,
    pageSize?: number,
    orderBy?: TSort,
    branch?: string
) => Promise<Commit[]>;
