/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      margin: {
        "5px": "5px",
      },
      padding: {
        "10vh": "10vh",
      },

      f_layout: {
        width: "16rem",
      },
    },
  },
  plugins: [],
};
