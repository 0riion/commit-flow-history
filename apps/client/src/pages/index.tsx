
import { BranchOption } from '../@types/branch.type';
import Meta from '../components/common/meta';
import Branch from '../components/home/branch';
import PageSize from '../components/home/page-size';
import Pagination from '../components/home/pagination';
import Sorter from '../components/home/sorter';
import Table from '../components/home/table';
import { usePaginatedCommits } from '../hooks/usePaginatedCommits';

export default function Home() {
	const {
		loading,
		commits,
		nextPage,
		prevPage,
		changePageSize,
		pageSize,
	} = usePaginatedCommits();

	const branchData: BranchOption[] = [
		{ id: 1, branch: 'main' },
		{ id: 2, branch: 'develop' },
		{ id: 3, branch: 'feature' },
		{ id: 4, branch: 'release' },
	];

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
							<Branch data={branchData} />
						</div>
						<Sorter />
					</div>

					{/* Table */}

					{loading && (
						<div className='flex justify-center items-center'>
							<div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-white'></div>
						</div>
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
