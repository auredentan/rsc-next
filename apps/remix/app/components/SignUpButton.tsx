import { useTranslation } from "react-i18next";

import { Button } from "@/ui/Button";

export default function SignUpButton() {
  let { t } = useTranslation();

  return (
    <a href="/login">
      <Button variant="outline">{t("sign-up")}</Button>
    </a>
  );
}
