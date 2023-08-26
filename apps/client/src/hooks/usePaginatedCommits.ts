import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useCommonPagination } from "./useCommonPagination";
import { getCommitTotalCount, getPaginatedCommits } from "../services/commit";
import { setCommits } from "../redux/features/commits";

type TUsePaginatedCommits = () => {
    commits: any[];
    loading: boolean;
    nextPage: () => void;
    prevPage: () => void;
    changePageSize: (size: number) => void;
    pageSize: number;
};

export const usePaginatedCommits: TUsePaginatedCommits = () => {
    const commits = useAppSelector((state) => state.commits.commits);
    const dispatch = useAppDispatch();

    const {
        loading,
        pageIndex,
        pageSize,
        startLoading,
        stopLoading,
        nextPage,
        prevPage,
        changePageSize,
        changeTotalPages,
    } = useCommonPagination();

    const getAllCommits = async () => {
        try {
            startLoading();
            const data = await getPaginatedCommits(pageIndex, pageSize);
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
    }, [pageIndex, pageSize]);

    return {
        commits,
        loading,
        nextPage,
        prevPage,
        changePageSize,
        pageSize,
    };
};
