import React from "react";

import { useAtom } from "jotai";

import { sessionUserAtom } from "@/store";

type Props = {
  children?: React.ReactNode;
};
export const SignedIn: React.FC<Props> = ({ children }) => {
  const [user] = useAtom(sessionUserAtom);

  if (!user) {
    return null;
  }
  return <div>{children}</div>;
};
