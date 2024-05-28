/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "600px",
        laptop: "1200px",
        desktop: "1536px",
      },
      margin: {
        "5px": "5px",
      },
      padding: {
        "5vh": "5vh",
        "10vh": "10vh",
      },

      f_layout: {
        width: "16rem",
      },
    },
  },
  plugins: [],
};
