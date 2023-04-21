
  import type { Config } from "tailwindcss";

  import baseConfig from "@rsc/config-tailwind";
  
  export default {
    darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    presets: [baseConfig],
  } satisfies Config;
