"use client";
import { BranchOption } from "apps/client/src/@types/branch.type";
import { useCallback, useState } from "react";

interface Props {
    data: BranchOption[];
}

export default function Branch({ data }: Props) {
    const [activeOption, setActiveOption] = useState<number>(1);
    const [branchShow, setBranchShow] = useState<boolean>(false);

    const handleBrachDropdown = useCallback(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.closest('.brachDropdown')) {

                if (branchShow) {
                    setBranchShow(false);
                } else {
                    setBranchShow(true);
                }

            } else {
                setBranchShow(false);
            }
        };
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    const updateBranchData = (branch: string) => {
        console.log(branch);
    };

    return (
        <div className="my-1 mr-2.5 relative">
            <button
                className="group dropdown-toggle brachDropdown dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white"
                onClick={handleBrachDropdown}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white"
                >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"></path>
                </svg>
                <span>Branchs</span>
            </button>

            <div
                className={
                    branchShow
                        ? 'dropdown-menu dark:bg-jacarta-800 z-10 min-w-[120px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0'
                        : 'dropdown-menu dark:bg-jacarta-800 z-10 min-w-[120px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl absolute top-full right-0 hidden'
                }>
                <ul className="flex flex-col flex-wrap">
                    {
                        data.map(({ id, branch }, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveOption(id)}
                            >
                                <button
                                    className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
                                    onClick={() => updateBranchData(branch)}
                                >
                                    <span className="text-jacarta-700 dark:text-white">{branch}</span>
                                    {activeOption === id && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="fill-accent mb-[3px] h-4 w-4"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                        </svg>
                                    )}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    );
};

