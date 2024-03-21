import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        frio: "#1100ff",
      },
      colors: {
        cielo: "#2E91D4",
      },
      fontFamily: {
        rain: "Internal Rainbows",
        mana: "Manaspace",
      },
    },
  },
  plugins: [],
};
export default config;
