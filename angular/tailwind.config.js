/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        blackbean: '#301014',
        xanthous: '#ffc145',
        emerald2: '#5dd39e',
        custombeige: '#fff0d4',
        argent: "#C0C0C0",
        bronze: "C49C48",
        or: "#efd807",
        sapin: "#C3DCB2",
        sapinfonce: "#577a3e"
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};

