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

import i18next from "@/i18next.server";

import styles from "./global.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { cn } from "./utils";
import { rateLimiter } from "./rateLimiter.server";
import { authenticator } from "./services/auth.server";
import { globalStore, sessionUserAtom } from "./store";
import { Provider } from "jotai";
import { rootAuthLoader } from "@clerk/remix/ssr.server";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

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

  return rootAuthLoader(
    args,
    async ({ request }) => {
      const user = await authenticator.isAuthenticated(args.request);
      const locale = await i18next.getLocale(args.request);
      return json({ locale, user });
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
  let { locale, user } = useLoaderData<typeof loader>();

  if (user) {
    globalStore.set(sessionUserAtom, user);
  }

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

const AppWithAuth = (App: () => JSX.Element) => {
  return () => {
    return (
      <Provider store={globalStore}>
        <App />
      </Provider>
    );
  };
};

export default ClerkApp(AppWithAuth(App));
