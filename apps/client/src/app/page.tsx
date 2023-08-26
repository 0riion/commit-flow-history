import Link from 'next/link';
import { BranchOption } from '../@types/branch.type';
import { commits } from '../assets/mockup-data/commits';
import Meta from '../components/common/meta';
import Branch from '../components/home/branch';
import Sorter from '../components/home/sorter';
import Image from 'next/image';

export default async function Home() {
	const branchData: BranchOption[] = [
		{ id: 1, branch: 'main' },
		{ id: 2, branch: 'develop' },
		{ id: 3, branch: 'feature' },
		{ id: 4, branch: 'release' },
	];

	return (
		<>
			<Meta title="Home - Commit History" />
			<section className="relative">
				<div className="container">

					{/* Hero section */}
					<h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
						Welcome to Commit History
					</h1>


					{/* Filters */}
					<div className="mb-8 flex flex-wrap items-center justify-between">
						<div className="flex flex-wrap items-center">
							<Branch data={branchData} />
						</div>
						<Sorter />
					</div>

					{/* <!-- Table --> */}
					<div className="scrollbar-custom overflow-x-auto">
						<div
							role="table"
							className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white"
						>
							<div className="dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex" role="row">
								<div className="w-[20%] py-3 px-4" role="columnheader">
									<span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
										Author
									</span>
								</div>
								<div className="w-[10%] py-3 px-4" role="columnheader">
									<span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
										Committer
									</span>
								</div>
								<div className="w-[60%] py-3 px-4" role="columnheader">
									<span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
										Message
									</span>
								</div>
								<div className="w-[10%] py-3 px-4" role="columnheader">
									<span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
										Date
									</span>
								</div>
							</div>
							{commits.map((data, index) => {
								console.log(data, index);

								const { url, } = data.commit;

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
												<span className='mr-2 lg:mr-4'>{index}</span>
												<figure className='relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12'>
													{/* <img src={image} alt={title} className="rounded-2lg" loading="lazy" /> */}
													<Image
														src="/images/avatar/avatar_1.jpg"
														alt="avatar"
														height={32}
														width={32}
														layout='responsive'
														objectFit='contain'
														className='rounded-2lg'
													/>

													{true && (
														<div
															className='dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white'
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
													Julio Flores
												</span>
											</div>

											<div
												className='dark:border-jacarta-600 border-jacarta-100 flex w-[10%] items-center whitespace-nowrap border-t py-4 px-4'
												role='cell'
											>
												<span className='text-sm font-medium tracking-tight'>
													Github
												</span>
											</div>

											<div
												className='dark:border-jacarta-600 border-jacarta-100 flex w-[60%] items-center border-t py-4 px-4'
												role='cell'
											>
												<span className={`text-green`}>
													Merge pull request #4 from 0riion/development\n\nDevelopment
												</span>
											</div>

											<div
												className='dark:border-jacarta-600 border-jacarta-100 flex w-[10%] items-center border-t py-4 px-4'
												role='cell'
											>
												<span className={`text-sm font-medium tracking-tight`}>
													12/12/2021
												</span>
											</div>

										</a>
									</Link>
								)
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
