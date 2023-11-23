/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbahSans: ["Kumbh Sans", "sans - serif"],
        agba: ["Oswald", "sans-serif"],
      },
      translate: {
        100: "600px",
      },
    },
  },
  plugins: [],
};
