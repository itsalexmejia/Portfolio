module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        brandtitle: ['NexaBold', 'sans-serif'],
      },
      colors:{
        brand: {
          50: "#192951",
          100: "#192951",
          200: "#192951",
          300: "#192951",
          400: "#192951",
          500: "#192951",
          600: "#192951",
          700: "#192951",
          800: "#192951",
          900: "#192951",
        },
        arena: {
          50: "#6f144d",
          100: "#6f144d",
          200: "#6f144d",
          300: "#6f144d",
          400: "#6f144d",
          500: "#6f144d",
          600: "#6f144d",
          700: "#6f144d",
          800: "#6f144d",
          900: "#6f144d",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
