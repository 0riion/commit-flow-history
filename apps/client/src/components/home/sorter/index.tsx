"use client";
import { useCallback, useState } from "react";

interface Props {
    id: number;
    text: string;
};

const data = [
    { id: 1, text: 'Newest' },
    { id: 2, text: 'Oldest' },
];

export default function Sorter() {
    const [sortShow, setsortShow] = useState<boolean>(false);
    const [activeOption, setActiveOption] = useState<number>(1);

    const handleSortDropdown = useCallback(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.closest('.sortDropdown')) {

                if (sortShow) {
                    setsortShow(false);
                } else {
                    setsortShow(true);
                }


            } else {

                setsortShow(false);
            }
        };
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);


    const updateOrderData = (branch: string) => {
        console.log(branch);
    };

    return (
        <div className="dropdown relative my-1 cursor-pointer">
            <button
                className="dark:bg-jacarta-700 sortDropdown dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white"
                onClick={handleSortDropdown}
            >
                <span className="font-display">Newest</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-jacarta-500 h-4 w-4 dark:fill-white"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                </svg>
            </button>

            <div
                className={
                    sortShow
                        ? 'dropdown-menu dark:bg-jacarta-800 z-10 whitespace-nowrap rounded-xl max-w-xs w-[13rem] bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0'
                        : 'dropdown-menu dark:bg-jacarta-800 z-10 whitespace-nowrap rounded-xl max-w-xs w-[13rem] bg-white py-4 px-2 text-left shadow-xl hidden absolute top-full right-0'
                }
            >
                {data.map(({ id, text }) => {
                    return (
                        <button
                            key={id}
                            onClick={() => {
                                setActiveOption(id);
                                updateOrderData(text);
                            }}
                            className="dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
                        >
                            {text}
                            {activeOption === id && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="fill-accent mb-[3px] h-4 w-4"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                </svg>
                            )}
                        </button>
                    );
                })}

            </div>
        </div>
    );
};
