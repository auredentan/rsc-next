import { useTranslation } from "react-i18next";

import { Button } from "@/ui/Button";
import { AuthenticationDialog } from './AuthenticationDialog';

export default function SignInButton() {
  let { t } = useTranslation();

  return (
    <AuthenticationDialog triggerLabel={t('sign-in')} />
  );
}
