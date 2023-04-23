import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";

import { Main } from "@/components/Main";
import { Combobox } from '@/ui/Combobox';

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async (args: LoaderArgs) => {
  return null;
};

export default function Index() {
  return <><Main /> <Combobox /></>
}
