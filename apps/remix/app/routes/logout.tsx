import { ActionArgs } from "@remix-run/server-runtime";

import { authenticator } from "@/services/auth.server";

export async function loader({ request }: ActionArgs) {
  await authenticator.logout(request, { redirectTo: "/" });
  return null;
}
