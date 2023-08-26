"use client";
import { TSort } from "apps/client/src/hooks/useCommonPagination";

interface ISorterProps {
    orderBy: TSort;
    changeOrderBy: (orderBy: TSort) => void;
};

const data: { id: TSort; text: TSort; }[] = [
    { id: 'asc', text: 'asc' },
    { id: 'desc', text: 'desc' },
];

export default function Sorter({ changeOrderBy, orderBy }: ISorterProps) {
    console.log(orderBy);
    return (
        <div className="dropdown relative my-1 cursor-pointer">
            <select
                className="dark:bg-jacarta-700 sortDropdown dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-24 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white"
                value={orderBy}
                onChange={(e) => changeOrderBy(e.target.value as TSort)}
            >
                {
                    data.map((option, index) => {
                        return (
                            <option key={index} value={option.id}>{option.text}</option>
                        )
                    })
                }
            </select>
        </div>
    );
};
