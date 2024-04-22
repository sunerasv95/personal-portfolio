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
        dark: "#121F18",
        primary: "#6DA07F",
        highlight: "#F9BB96",
        neutral: "#C0C9C4",
        grey: "#8E928D",
        "spring-wood": "#F1F8F0",
        "blue-green": "#54BCCE",
        sea: "#44A08D",
        "gable-green": "#093637",
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
      fontWeight: {
        normal: "300",
      },
      maxWidth: {
        readable: "10ch",
      },
    },
  },
  plugins: [],
};
export default config;
