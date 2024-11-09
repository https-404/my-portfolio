/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray1: "#a19f9f", // Define gray1 to match your CSS color variable
      },
    },
  },

  plugins: [],
};
