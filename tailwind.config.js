/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121829',
        secondary: '#05CE91',
        blue: '#5A4AF4',
        blue700: '#7B6EF6',
        sky: '#1EA5FC',
        red: '#FF6161',
        purple: '#B66DFF',
        yellow: '#FFAD49',
        gray200: '#A8AEBF',
        gray50: '#EBEEF5',
        gray300: '#8E95A9',
        gray700: '#323B54',
        gray600: '#475069',
      },
    },
  },
  plugins: [],
}
