import { ComboboxItem } from './ui/Combobox';

const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];
  
  export type FrameworkData = { label: string; value: string }
  export const frameworkData: ComboboxItem<FrameworkData>[] =
    frameworks.map((f) => ({
      data: f,
      id: f.value,
      label: f.label,
    }));
