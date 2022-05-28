module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Allison', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Tiro Devanagari Hindi', 'serif']
      },
      keyframes: {
        wave: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '10%': {
            transform: 'rotate(14deg)'
          },
          '20%': {
            transform: 'rotate(-8deg)'
          },
          '30%': {
            transform: 'rotate(14deg)'
          },
          '40%': {
            transform: 'rotate(-4deg)'
          },
          '50%': {
            transform: 'rotate(10deg)'
          },
          '60%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(0deg)'
          }
        }
      },
      animation: {
        wave: 'wave 3s infinite'
      }
    },
  },
  plugins: [],
};
