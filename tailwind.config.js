/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '128': '15rem',
      },
      height: {
        '128': '15rem'
      }
    },
  },
  plugins: [],
}

