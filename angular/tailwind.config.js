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
        custombeige: '#fff0d4'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}