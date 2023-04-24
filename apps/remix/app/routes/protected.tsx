import React from "react";

import { getAuth } from "@clerk/remix/ssr.server";

import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { authenticator } from "@/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request);
  console.log({ user });
  return json(user);
};

export default function ProtectedPage() {
  return (
    <div>
      <h1>Protected</h1>
    </div>
  );
}
