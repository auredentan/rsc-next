import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";

import { Main } from "@/components/Main";
import { Combobox } from '@/ui/Combobox';
import { FrameworkData, frameworkData } from '@/constant';
import { authenticator } from '@/services/auth.server';

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async ({request}: LoaderArgs) => {
  return await authenticator.isAuthenticated(request);
};

export default function Index() {
  return <><Main /> <Combobox<FrameworkData> data={frameworkData} /></>
}
