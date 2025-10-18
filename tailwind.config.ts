import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rich-black": "#0D1821",
        "platinum": "#EFF1F3",
        "deep-jungle-green": "#4E6E5D",
        "raw-umber": "#AD8A64",
        "bittersweet": "#A44A3F",
      },
    },
  },
  plugins: [],
};
export default config;
