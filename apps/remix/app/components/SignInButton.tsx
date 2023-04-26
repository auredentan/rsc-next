import { useClerk } from "@clerk/remix";

// @ts-ignore
import { dark, light } from "@clerk/themes";

import { Button } from "@/ui/Button";
import { useTheme } from "./Theme/ThemeProvider";

export function SignInButton() {
  const clerk = useClerk();

  const { theme } = useTheme();

  return (
    <Button
      onClick={() =>
        clerk.openSignIn({
          appearance: {
            baseTheme: theme === "dark" ? dark : light,
          },
        })
      }
    >
      Sign in
    </Button>
  );
}
