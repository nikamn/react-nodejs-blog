/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F1D4E5",
        btn: "#30A2FF",
        secondary: "#E893CF",
      },
    },
  },
  plugins: [],
};
