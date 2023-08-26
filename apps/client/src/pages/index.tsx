
import { BranchOption } from '../@types/branch.type';
import Meta from '../components/common/meta';
import Branch from '../components/home/branch';
import Sorter from '../components/home/sorter';
import Table from '../components/home/table';

export default function Home() {
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

					<Table />

				</div>
			</section>
		</main>
	);
}
