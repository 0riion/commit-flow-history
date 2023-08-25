'use client';

import { trpc } from './trpc';
import { useEffect, useState } from 'react';

export default function ClientSide() {
	const [greeting, setGreeting] = useState('');
	useEffect(() => {
		trpc.hello
			.query({ name: `App` })
			.then(({ greeting }) => setGreeting(greeting));
	}, []);
	return <p>I am client side: {greeting}</p>;
}
