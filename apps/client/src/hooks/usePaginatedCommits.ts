import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TSort, useCommonPagination } from "./useCommonPagination";
import { getCommitTotalCount, getPaginatedCommitsOrderBy } from "../services/commit";
import { setCommits } from "../redux/features/commits";

type TUsePaginatedCommits = () => {
    commits: any[];
    loading: boolean;
    pageSize: number;
    orderBy: TSort;
    currentBranch: string;
    nextPage: () => void;
    prevPage: () => void;
    changePageSize: (size: number) => void;
    changeOrderBy: (orderBy: "asc" | "desc") => void;
    setCurrentBranch: (branch: string) => void;
};

export const usePaginatedCommits: TUsePaginatedCommits = () => {
    const [currentBranch, setCurrentBranch] = useState<string>("main");
    const commits = useAppSelector((state) => state.commits.commits);
    const dispatch = useAppDispatch();

    const {
        orderBy,
        loading,
        pageIndex,
        pageSize,
        startLoading,
        stopLoading,
        nextPage,
        prevPage,
        changePageSize,
        changeTotalPages,
        changeOrderBy,
    } = useCommonPagination();

    const getAllCommits = async () => {
        try {
            startLoading();
            const data = await getPaginatedCommitsOrderBy(
                pageIndex,
                pageSize,
                orderBy,
                currentBranch
            );
            const total = await getCommitTotalCount();
            dispatch(setCommits(data));
            changeTotalPages(total);
            stopLoading();
        } catch (error) {
            // TODO: add feedback and logging
        }
    };

    useEffect(() => {
        getAllCommits();
    }, [pageIndex, pageSize, orderBy, currentBranch]);

    return {
        commits,
        loading,
        pageSize,
        orderBy,
        currentBranch,
        nextPage,
        prevPage,
        changePageSize,
        changeOrderBy,
        setCurrentBranch,
    };
};
