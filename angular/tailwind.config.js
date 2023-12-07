/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        blackbean: '#301014',
        xanthous: '#ffc145',
        emerald2: '#5dd39e',
        custombeige: '#fff0d4'
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};