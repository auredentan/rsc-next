import React from "react";

import { getAuth } from "@clerk/remix/ssr.server";

import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async (args) => {
  console.log({ args });
  const { userId, sessionId, getToken } = await getAuth(args);

  console.log({ userId, sessionId });

  return json({ yourData: "here" });
};

export default function ProtectedPage() {
  return (
    <div style={{ border: "2px solid blue", padding: "2rem" }}>
      <h1>Protected</h1>
    </div>
  );
}
