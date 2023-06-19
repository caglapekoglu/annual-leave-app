/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        "inter":"'Inter', sans-serif",
        'Maiandra': ['Maiandra GD', ...defaultTheme.fontFamily.sans],
        'Maiandra-gd': ['Maiandra GD Semibold', ...defaultTheme.fontFamily.sans],

       
      },
      fontWeight: {
        "semibold": "600"
      },
      colors:{
        "select-bg":"rgba(93, 133, 236, 0.08)",
        "select-b":"rgba(93, 133, 236, 1)",
        "input-bg":"rgba(242, 243, 245, 1)",
        "input-b":"rgb(198, 203, 213, 1)",
        "secondary-text":"#9197A7"
      }
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Maiandra GD',
            fontWeight: 'normal',
            src: 'url(/src/assets/fonts/MAIAN.TTF)',
          },
          {
            fontFamily: 'Maiandra GD Semibold',
            fontWeight: 'semibold',
            src: 'url(/src/assets/fonts/demibold.ttf)',
          },
        ],
      });
    }),
  ],
}
