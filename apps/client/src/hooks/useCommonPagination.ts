import { useState } from "react";

export type TSort = "asc" | "desc";
type TUseCommonPagination = () => {
    orderBy: TSort;
    loading: boolean;
    pageIndex: number;
    totalPages: number;
    pageSize: number;
    isError: boolean;
    errorMessage: string;
    setIsError: (isError: boolean) => void;
    setErrorMessage: (errorMessage: string) => void;
    setTotalPages: (totalPages: number) => void;
    setPageIndex: (pageIndex: number) => void;
    setPageSize: (pageSize: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    startLoading: () => void;
    stopLoading: () => void;
    changePageSize: (pageSize: number) => void;
    changeTotalPages: (totalPages: number) => void;
    changeOrderBy: (orderBy: TSort) => void;
};


export const useCommonPagination: TUseCommonPagination = () => {
    const [totalPages, setTotalPages] = useState<number>(1);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(5);
    const [loading, setLoading] = useState<boolean>(false);
    const [orderBy, setOrderBy] = useState<TSort>("asc");
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const changeOrderBy = (orderBy: TSort) => {
        setOrderBy(orderBy);
    };

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
        totalPages,
        pageSize,
        orderBy,
        isError,
        errorMessage,
        setIsError,
        setErrorMessage,
        setTotalPages,
        setPageIndex,
        setPageSize,
        nextPage,
        prevPage,
        startLoading,
        stopLoading,
        changePageSize,
        changeTotalPages,
        changeOrderBy,
    };
};
