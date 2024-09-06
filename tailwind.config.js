/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#2275D7",
        "primary-secondary": "#4A90E2",
        secondary: "#7F8C8D",
        destructive: "#E74C3C",
        outline: "#C0C0C0",
      },
    },
  },
  plugins: [],
};
