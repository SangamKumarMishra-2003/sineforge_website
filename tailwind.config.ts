import type { Config } from "tailwindcss";


const config: Config = {

  darkMode: [
    "class",
  ],


  content: [

    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./hooks/**/*.{js,ts,jsx,tsx}",

  ],


  theme: {

    extend: {


      colors: {

        primary: {
          DEFAULT:
            "#06b6d4",

          dark:
            "#0891b2",
        },


        secondary:
          "#6366f1",


        background:
          "#050505",


        surface:
          "#0b0b0f",

      },



      container: {

        center: true,


        padding: {

          DEFAULT:
            "1rem",

          sm:
            "2rem",

          lg:
            "4rem",

          xl:
            "5rem",

        },


      },



      borderRadius: {

        xl:
          "1rem",

        "2xl":
          "1.5rem",

        "3xl":
          "2rem",

      },



      animation: {

        float:
          "float 4s ease-in-out infinite",

        marquee:
          "marquee 20s linear infinite",

      },


    },

  },


  plugins: [],

};


export default config;