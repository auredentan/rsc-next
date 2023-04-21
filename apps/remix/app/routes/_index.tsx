import React from "react";

import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node"; // or cloudflare/deno

import { db } from "@/db.server";
import {  createActivity } from "@rsc/db";
import { Main } from '@/components/Main';

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {
  //await createActivity(db)
  return null
};

export default function Index() {
  return (
    <Main />
  );
}
