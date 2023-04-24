import { useTranslation } from "react-i18next";

import { Button } from "@/ui/Button";

export default function SignInButton() {
  let { t } = useTranslation();

  return (
    <a href="/login">
      <Button>{t("sign-in")}</Button>
    </a>
  );
}
