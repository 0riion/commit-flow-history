import Notification from '../components/common/Notification';
import LoadingComponent from '../components/common/loading-component';
import Meta from '../components/common/meta';
import Branch from '../components/home/branch';
import PageSize from '../components/home/page-size';
import Pagination from '../components/home/pagination';
import Sorter from '../components/home/sorter';
import Table from '../components/home/table';
import { usePaginatedCommits } from '../hooks/usePaginatedCommits';

export default function Home() {
	const {
		currentBranch,
		loading,
		commits,
		orderBy,
		pageSize,
		isError,
		errorMessage,
		setIsError,
		setErrorMessage,
		nextPage,
		prevPage,
		changePageSize,
		changeOrderBy,
		setCurrentBranch,
	} = usePaginatedCommits();

	return (
		<main>
			<Meta title='Home - Commit History' />
			<section className='relative'>
				<div className='container'>
					{/* Hero section */}
					<h1 className='font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white'>
						Welcome to Commit History
					</h1>

					{/* Filters */}
					<div className='mb-8 flex flex-wrap items-center justify-between'>
						<div className='flex flex-wrap items-center'>
							<Branch currentBranch={currentBranch} setCurrentBranch={setCurrentBranch} />
						</div>
						<Sorter changeOrderBy={changeOrderBy} orderBy={orderBy} />
					</div>

					{isError && (
						<Notification
							type="error"
							message={errorMessage}
							setIsError={setIsError}
							setErrorMessage={setErrorMessage}
						/>
					)}

					{/* Table */}

					{loading && (
						<LoadingComponent />
					)}

					{!loading && commits && commits.length > 0 && (
						<Table commits={commits} />
					)}

					{!loading && commits && commits.length === 0 && (
						<div className='flex justify-center items-center'>
							<h1 className='text-2xl font-medium text-gray-900 dark:text-white'>
								No commits found
							</h1>
						</div>
					)}

					{/* Pagination & Page size */}

					<div className='flex flex-wrap items-center justify-between mt-10'>
						<PageSize changePageSize={changePageSize} pageSize={pageSize} />
						<Pagination prevPage={prevPage} nextPage={nextPage} />
					</div>

				</div>
			</section>
		</main>
	);
}
