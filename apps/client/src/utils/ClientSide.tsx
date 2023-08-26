'use client';

import { Commit } from '../@types/commit.type';
import { trpc } from './trpc';
import { useEffect, useState } from 'react';

export default function ClientSide() {
	const [commits, setCommits] = useState<Commit[]>([]);

	useEffect(() => {
		async function fetchCommits() {
			const commits = await trpc.commits.query({
				repo: 'facebook/react',
				owner: 'date',
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
