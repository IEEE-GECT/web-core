const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ieee-blue": "#0a70a3",
        "ieee-blue-dark": "#036190",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
