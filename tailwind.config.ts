import { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030229",
        secondary: "#605BFF",
        arrow: "#999CA0",
        link: "#5B93FF",
      },
    },
  },
  plugins: [],
};

export default config;
