/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#143cdb",
        darkPrimary: "#362ca4",
        brandRed: "#f80e0f",
        brandYellow: "#ffcb00",
      },
    },
  },
  plugins: [],
};
