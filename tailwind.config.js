/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-4": "#bdbdbd",
        "light-grey": "#e3e3e3",
        "pale-purple": "#434861",
        row: "#18191f",
        "mid-grey": "#939393",
        "main-dark": "#141414",
        "gray-6": "#f2f2f2",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        book: "Gotham",
        medium: "Inter",
        "h1-title-42": "'Akira Expanded'",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "23xl": "42px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
