import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from '@remix-run/react';
import { json } from "@remix-run/node"; // or cloudflare/deno

import { db, countries } from '@rsc/db'

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {
  const all_countries = await db.select().from(countries)
  return json(all_countries)
}

export default function Index() {

  const all = useLoaderData<typeof loader>()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      {all.map((c) => <p key={c.id}>{c.name}</p>)}
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
