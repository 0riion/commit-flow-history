
interface PaginationProps {
    prevPage: () => void;
    nextPage: () => void;
}

export default function Pagination(props: PaginationProps) {

    const { prevPage, nextPage } = props;

    return (
        <div className='flex flex-wrap items-center'>
            <button
                className='text-jacarta-700 dark:text-jacarta-100 text-sm border-jacarta-100 dark:border-jacarta-600 border rounded-md py-1 px-2 mr-2'
                onClick={() => prevPage()}
            >
                Prev
            </button>
            <button
                className='text-jacarta-700 dark:text-jacarta-100 text-sm border-jacarta-100 dark:border-jacarta-600 border rounded-md py-1 px-2'
                onClick={() => nextPage()}
            >
                Next
            </button>
        </div>
    )
};

