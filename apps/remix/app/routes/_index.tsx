import React from 'react';

import { SignedIn, SignedOut } from "@clerk/remix";

import type { V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from '@remix-run/react';
import { json } from "@remix-run/node"; // or cloudflare/deno

import { prisma } from '../db-prisma.server'
import { countries } from '@rsc/db'

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {
  console.log('ici')
  const all_countries = await prisma.countries.findMany()
  console.log({all_countries})
  return json(all_countries)
}

const ClerkFeatures = () => (
  <Link to="/user" className="cardContent">
    <img src="/icons/layout.svg" />
    <div>
      <h3>Explore features provided by Clerk</h3>
      <p>Interact with the user button, user profile, and more to preview what your users will see</p>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const SsrDemoLink = () => (
  <Link to="/ssr-demo" className="cardContent">
    <img src="/icons/layout.svg" />
    <div>
      <h3>Visit the SSR demo page</h3>
      <p>
        See how Clerk hydrates the auth state during SSR and CSR, enabling server-side generation even for
        authenticated pages
      </p>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const SignupLink = () => (
  <Link to="/sign-up" className="cardContent">
    <img src="/icons/user-plus.svg" />
    <div>
      <h3>Sign up for an account</h3>
      <p>Sign up and sign in to explore all the features provided by Clerk out-of-the-box</p>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const Main = () => (
  <main className="main">
    <h1 className="title">Welcome to your new app</h1>
    <SignedIn>
      <p className="description">You have successfully signed in</p>
    </SignedIn>
    <SignedOut>
      <p className="description">Sign up for an account to get started</p>
    </SignedOut>

    <div className="cards">
      <SignedOut>
        <div className="card">
          <SignupLink />
        </div>
      </SignedOut>
    </div>
  </main>
);


export default function Index() {

  const all = useLoaderData<typeof loader>()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
       <div className="container">
      <Main />
    </div>

      <button className='btn btn-primary'>Button</button>

      {all.map((c) => <p key={c.id}>{c.name}</p>)}
      
    </div>
  );
}
