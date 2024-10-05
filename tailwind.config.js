/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "5vw",
      },
      colors: {
        primary: "#86BC42",
        primaryDark: "#064F37",
      },
    },
  },
  plugins: [],
};
