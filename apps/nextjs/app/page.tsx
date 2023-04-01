import { Inter } from 'next/font/google'

import { db, countries } from '@rsc/db'

import './globals.css'

export const dynamic = 'force-dynamic'

export default async function Home() {

	const count = await db.select().from(countries)

	return (
		<main>
			<button className='btn btn-primary'>Button</button>
			{count.map((c) => <p key={c.id}>{c.name}</p>)}
		</main>
	)
}
