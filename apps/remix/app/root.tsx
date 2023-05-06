import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import { rootAuthLoader } from "@clerk/remix/ssr.server";

import { Analytics } from "@vercel/analytics/react";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  V2_MetaFunction,
  useLoaderData,
} from "@remix-run/react";

import { DataFunctionArgs, LinksFunction, json } from "@remix-run/node";

import i18next from "@/i18next.server";

import styles from "./global.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { cn } from "./utils";
import { rateLimiter } from "./rateLimiter.server";
import { ClerkApp, ClerkCatchBoundary } from '@clerk/remix';

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async (args: DataFunctionArgs) => {
  // Rate limit
  const ip =
    args.request.headers.get("X-Forwarded-For") ??
    args.request.headers.get("x-real-ip");
  const identifier = ip ?? "global";
  const { success } = await rateLimiter.limit(identifier);
  if (!success) {
    throw new Error("Rate limit ....");
  }

  return rootAuthLoader(args, async ({ request }) => {
    // Translations
    const locale = await i18next.getLocale(request);
    return json({ locale });
  });
};

export function useChangeLanguage(locale: string) {
  let { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
}

function App() {
  let { locale } = useLoaderData<typeof loader>();

  let { i18n } = useTranslation();

  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
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
