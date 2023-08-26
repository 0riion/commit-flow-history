import { useState } from "react";

type TUseCommonPagination = () => {
    loading: boolean;
    pageIndex: number;
    setPageIndex: (pageIndex: number) => void;
    totalPages: number;
    setTotalPages: (totalPages: number) => void;
    pageSize: number;
    setPageSize: (pageSize: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    startLoading: () => void;
    stopLoading: () => void;
    changePageSize: (pageSize: number) => void;
    changeTotalPages: (totalPages: number) => void;
};

export const useCommonPagination: TUseCommonPagination = () => {
    const [totalPages, setTotalPages] = useState<number>(1);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(5);
    const [loading, setLoading] = useState<boolean>(false);

    const nextPage = () => {
        if (pageIndex < totalPages) {
            setPageIndex(pageIndex + 1);
        }
    }

    const prevPage = () => {
        if (pageIndex > 1) {
            setPageIndex(pageIndex - 1);
        }
    }

    const startLoading = () => {
        setLoading(true);
    }

    const stopLoading = () => {
        setLoading(false);
    }

    const changePageSize = (pageSize: number) => {
        setPageSize(pageSize);
    }

    const changeTotalPages = (totalPages: number) => {
        const intTotalPage = Math.ceil(totalPages / pageSize);
        setTotalPages(intTotalPage);
    }

    return {
        loading,
        pageIndex,
        setPageIndex,
        totalPages,
        setTotalPages,
        pageSize,
        setPageSize,
        nextPage,
        prevPage,
        startLoading,
        stopLoading,
        changePageSize,
        changeTotalPages,
    };
};
