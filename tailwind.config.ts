import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: "#1D4E4D",
      primary: "#0099A2",
      highlight: "#54BCCE",
      neutral: "#F1F8F0",
      blue: "rgb(241,248, 240, 100%)",
    },
    fontSize: {
      xsm: "0.688rem",
      sm: "0.813rem",
      base: "1rem",
      lg: "1.188rem",
      h5: "1.438rem",
      h4: "1.75rem",
      h3: "2.063rem",
      h2: "2.5rem",
      h1: "3rem",
    },
  },
  plugins: [],
};
export default config;
