/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        taskbar: "#F8B2FF",
      },
      fontFamily: {
        display: ["var(--font-press-start)"],
        sans: ["var(--font-vt323)"],
      },
    },
  },
  plugins: [],
};
