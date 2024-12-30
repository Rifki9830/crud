import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   'color1':'#4C4B16',
    //   'color2':'#F6FCDF',
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'color1':'#133E87',
        'color2':'#F6FCDF',
        'color3':{
          '1' : '#31511E',
          '2' : '#F6FCDF'
        }
      },
      spacing: {
        '5X' : '5px',
        '15X' : '15px',
        '25X' : '25px',
        '10%' : '10%',
        '30%' : '30%'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "corporate", "dim"],
  },

};
export default config;
