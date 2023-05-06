import { Main } from "@/components/Main";
import { Combobox } from "@/ui/Combobox";
import { FrameworkData, frameworkData } from "@/constant";

export default function Index() {
  return (
    <>
      <Main />

      <Combobox<FrameworkData> data={frameworkData} />
    </>
  );
}
