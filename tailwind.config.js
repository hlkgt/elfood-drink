/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
};
