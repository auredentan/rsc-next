import React from "react";

import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node"; // or cloudflare/deno

import { db } from "@/db.server";
import { getCountries } from "@rsc/db";
import { Button } from "@/components/Button";
import { Main } from '@/components/Main';

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {
  const all_countries = await getCountries(db);
  return json(all_countries);
};

export default function Index() {
  const all = useLoaderData<typeof loader>();
  return (
    <Main />
  );
}
