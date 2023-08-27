import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { Commit } from 'apps/client/src/@types/commit.type';

interface TableProps {
    commits: Commit[];
}

export default function Table({ commits }: TableProps) {
    return (
        <>
            {/* <!-- Table --> */}
            <div className='scrollbar-custom overflow-x-auto'>
                <div
                    role='table'
                    className='dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white'
                >
                    <div
                        className='dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex'
                        role='row'
                    >
                        <div className='w-[20%] py-3 px-4' role='columnheader'>
                            <span className='text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis'>
                                Author
                            </span>
                        </div>
                        <div className='w-[10%] py-3 px-4' role='columnheader'>
                            <span className='text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis'>
                                Committer
                            </span>
                        </div>
                        <div className='w-[60%] py-3 px-4' role='columnheader'>
                            <span className='text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis'>
                                Message
                            </span>
                        </div>
                        <div className='w-[10%] py-3 px-4' role='columnheader'>
                            <span className='text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis'>
                                Date
                            </span>
                        </div>
                    </div>

                    {commits.map((data, index) => {
                        const { commit, author } = data;
                        const { url, verification, committer, message } = commit;

                        return (
                            <Link href={url} key={index} passHref legacyBehavior>
                                <a
                                    className='flex transition-shadow hover:shadow-lg'
                                    role='row'
                                >
                                    <div
                                        className='dark:border-jacarta-600 border-jacarta-100 flex w-[20%] items-center border-t py-4 px-4'
                                        role='cell'
                                    >
                                        <span className='mr-2 lg:mr-4'>{index + 1}</span>
                                        <figure className='relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12'>
                                            <Image
                                                src={author.avatar_url}
                                                alt='avatar'
                                                height={35}
                                                width={35}
                                                className='rounded-2lg'
                                            />

                                            {verification.verified && (
                                                <div
                                                    className='dark:border-jacarta-600 bg-green absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white'
                                                    data-tippy-content='Verified Collection'
                                                >
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        viewBox='0 0 24 24'
                                                        width='24'
                                                        height='24'
                                                        className='h-[.875rem] w-[.875rem] fill-white'
                                                    >
                                                        <path fill='none' d='M0 0h24v24H0z'></path>
                                                        <path d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z'></path>
                                                    </svg>
                                                </div>
                                            )}
                                        </figure>
                                        <span className='font-display text-jacarta-700 text-sm font-semibold dark:text-white'>
                                            {author.login}
                                        </span>
                                    </div>

                                    <div
                                        className='dark:border-jacarta-600 border-jacarta-100 flex w-[10%] items-center whitespace-nowrap border-t py-4 px-4'
                                        role='cell'
                                    >
                                        <span className='text-sm font-medium tracking-tight'>
                                            {committer.name}
                                        </span>
                                    </div>

                                    <div
                                        className='dark:border-jacarta-600 border-jacarta-100 flex w-[60%] items-center border-t py-4 px-4'
                                        role='cell'
                                    >
                                        <span className={`text-green`}>
                                            {message}
                                        </span>
                                    </div>

                                    <div
                                        className='dark:border-jacarta-600 border-jacarta-100 flex w-[10%] items-center border-t py-4 px-4'
                                        role='cell'
                                    >
                                        <span className={`text-sm font-medium tracking-tight`}>
                                            {moment(committer.date).format('DD MMM YYYY')}
                                        </span>
                                    </div>
                                </a>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    )
};
