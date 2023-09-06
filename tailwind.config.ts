import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        ShadowBlur: "3px 3px 12px 3px rgba(225,225,225,0.075)",
      },
      colors: {
        White: "#ffffff",
        Black: "#000000",
        Orange: "#eeb844",
        WhiteGray: "#b3b2b1",
        Blur: "rgba(225,225,225,0.075)",
        Glass: "rgba(225,225,225,0.15)",
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '720px',
      lg: '1024',
      xl: '1280px'
    }
  },
  plugins: [],
};
export default config;
