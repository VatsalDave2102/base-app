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
        inactive: "#9A9AA9",
        tablebg: "#F5F5F5",
        tableRow: "#FFF",
        popover: "#231F20",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundColor: {
        mildwhite: "#FAFAFB",
      },
    },
  },
  plugins: [],
};

export default config;
