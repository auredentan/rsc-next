import { useTranslation } from 'react-i18next';

import { useClerk } from "@clerk/remix";

import { Button } from "./Button";

export default function SignInButton() {
  const { openSignIn } = useClerk();

  let { t } = useTranslation();

  return <Button onClick={openSignIn as any}>{t('sign-in')}</Button>;
}
