import { Authenticator } from "remix-auth";

import { GitHubStrategy } from "remix-auth-github";

import { sessionStorage } from "@/services/session.server";

import { SessionUser } from "@/types/session";
import { findOrCreateUserFromProvider } from "@rsc/db";
import { db } from "@/db.server";

export let authenticator = new Authenticator<SessionUser>(sessionStorage);

authenticator.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      callbackURL: `${process.env.BASE_URL}/auth/github/callback`,
    },
    async ({ profile }) => {
      try {
        return await findOrCreateUserFromProvider(
          db,
          profile.emails[0].value,
          profile.provider,
        );
      } catch (err) {
        console.error(err);
        throw new Error(`Fail findOrCreateUserFromProvider`)
      }
    },
  ),
);
