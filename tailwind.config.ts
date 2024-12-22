import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A52FF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow:{
        primaryShadow: "0px 0px 6px 0px #5A52FF",
      }
    },
  },
  plugins: [],
};
export default config;
