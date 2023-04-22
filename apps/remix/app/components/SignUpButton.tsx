import { useTranslation } from "react-i18next";

import { useClerk } from "@clerk/remix";

import { Button } from "./Button";

export default function SignUpButton() {
  const { openSignUp } = useClerk();

  let { t } = useTranslation();

  return (
    <Button onClick={openSignUp as any} variant="outline">
      {t("sign-up")}
    </Button>
  );
}
