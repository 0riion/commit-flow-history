'use client';

import { Commit } from '../@types/commit.type';
import { trpc } from './trpc';
import { useEffect, useState } from 'react';

export default function ClientSide() {
	const [commits, setCommits] = useState<Commit[]>([]);

	useEffect(() => {
		async function fetchCommits() {
			const commits = await trpc.commits.query({
				repo: 'commit-flow-history',
				owner: '0riion',
				per_page: 5,
				page: 1,
				order: 'desc',
			});
			setCommits(commits);
		}
		fetchCommits();
	}, []);

	return (<>
		{commits.map((commit) => (
			<div key={commit.sha}>
				{commit.sha}
			</div>
		))}
	</>)
}
