import { useTranslation } from "react-i18next";

import { AuthenticationDialog } from "./AuthenticationDialog";

export default function SignUpButton() {
  let { t } = useTranslation();

  return <AuthenticationDialog triggerLabel={t("sign-up")} />;
}
