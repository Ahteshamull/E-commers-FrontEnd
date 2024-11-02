/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        black: "#000000",
        white: "#FAFAFA",
        orange: "rgba(219, 68, 68, 1)",
        white_rgba: "rgba(250, 250, 250, 1)",
        w_rgba: "rgba(245, 245, 245, 1)",
        black_rgba: "rgba(0, 0, 0, 1)",
        green_rgba: "rgba(0, 255, 102, 1)",
      },
      container: {
        center: true,
        screens: {
          xl: "1170px",
        },
      },
    },
  },
  plugins: [],
};
