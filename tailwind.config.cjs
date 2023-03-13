/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Encode Sans SC", "sans-serif"],
      body: ["Source Sans Pro", "sans-serif"],
      code: ["Source Code Pro", "sans-serif", "monospace"],
      consolas: ["Consolas", "sans-serif", "monospace"],
    },

    extend: {
      colors: {
        "primary-dark": "#0288D1",
        primary: "#03A9F4",
        gray: "#37474F",
      },
      boxShadow: {
        custom: "0px 1px 10px 0px #37474F55",
      },
    },
  },
  plugins: [],
};
