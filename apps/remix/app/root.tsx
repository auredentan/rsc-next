import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import { Analytics } from "@vercel/analytics/react";

import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { DataFunctionArgs, LinksFunction, json } from "@remix-run/node";

import { rootAuthLoader } from "@clerk/remix/ssr.server";

import i18next from "@/i18next.server";

import styles from "./global.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { cn } from "./utils";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const loader = (args: DataFunctionArgs) => {
  return rootAuthLoader(
    args,
    async ({ request }) => {
      const { userId, sessionId, getToken } = request.auth;

      let locale = await i18next.getLocale(request);
      return json({ locale });
    },
    { loadUser: true },
  );
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

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
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
