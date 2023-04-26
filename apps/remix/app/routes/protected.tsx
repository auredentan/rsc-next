import React from "react";

import { LoaderFunction, redirect } from "@remix-run/node";

import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunctionArgs } from "@clerk/remix/dist/ssr/types";

export const loader: LoaderFunction = async (args: LoaderFunctionArgs) => {
  const { userId } = await getAuth(args);
  if(!userId){
    return redirect("/");
  }
  return {}
};

export default function ProtectedPage() {
  return (
    <div>
      <h1>Protected</h1>
    </div>
  );
}
