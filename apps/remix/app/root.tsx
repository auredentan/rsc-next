import { Analytics } from "@vercel/analytics/react";

import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import type { DataFunctionArgs, LinksFunction } from "@remix-run/node";

import { rootAuthLoader } from "@clerk/remix/ssr.server";

import styles from "./global.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { cn } from "./utils";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const loader = (args: DataFunctionArgs) => {
  return rootAuthLoader(
    args,
    ({ request }) => {
      const { userId, sessionId, getToken } = request.auth;
      return { message: `Hello from the root loader :)` };
    },
    { loadUser: true, signInUrl: "/sign-in" },
  );
};

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="My app"></meta>
        <Meta />
        <Links />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

export const CatchBoundary = ClerkCatchBoundary();

export default ClerkApp(App);

