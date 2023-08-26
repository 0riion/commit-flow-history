
interface Props {
    changePageSize: (pageSize: number) => void;
    pageSize: number;
};

const pageSizeOptions = [
    { id: 1, text: '1 item' },
    { id: 5, text: '5 items' },
    { id: 10, text: '10 items' },
    { id: 20, text: '20 items' },
];

export default function PageSize({ changePageSize, pageSize }: Props) {
    return (
        <div className='flex flex-wrap items-center'>
            <span className='text-jacarta-700 dark:text-jacarta-100 text-sm mr-2'>
                Page size:
            </span>
            <select
                className="dark:bg-jacarta-700 sortDropdown dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-24 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white"
                value={pageSize}
                onChange={(e) => changePageSize(Number(e.target.value))}
            >
                {
                    pageSizeOptions.map((option, index) => {
                        return (
                            <option key={index} value={option.id}>{option.text}</option>
                        )
                    })
                }
            </select>

        </div>
    )
};
