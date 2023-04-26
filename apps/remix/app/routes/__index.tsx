import { ActionArgs, LoaderArgs, V2_MetaFunction, json } from "@remix-run/node";

import { Main } from "@/components/Main";
import { Combobox } from "@/ui/Combobox";
import { FrameworkData, frameworkData } from "@/constant";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <>
      <Main />

      <Combobox<FrameworkData> data={frameworkData} />
    </>
  );
}
