import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TSort, useCommonPagination } from "./useCommonPagination";
import { getCommitTotalCount, getPaginatedCommitsOrderBy } from "../services/commit";
import { setCommits } from "../redux/features/commits";
import log from '../utils/logger';

type TUsePaginatedCommits = () => {
    commits: any[];
    loading: boolean;
    pageSize: number;
    orderBy: TSort;
    currentBranch: string;
    isError: boolean;
    errorMessage: string;
    setIsError: (isError: boolean) => void;
    setErrorMessage: (errorMessage: string) => void;
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
        isError,
        errorMessage,
        orderBy,
        loading,
        pageIndex,
        pageSize,
        setErrorMessage,
        setIsError,
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
            log.error(error);
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
        isError,
        errorMessage,
        setIsError,
        setErrorMessage,
        nextPage,
        prevPage,
        changePageSize,
        changeOrderBy,
        setCurrentBranch,
    };
};
