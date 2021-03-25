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
          400: "#475474",
          500: "#192951",
          600: "#192951",
          700: "#0f1931",
          800: "#192951",
          900: "#192951",
        },
        arena: {
          50: "#f1e8ed",
          100: "#6f144d",
          200: "#e2d0db",
          300: "#6f144d",
          400: "#6f144d",
          500: "#6f144d",
          600: "#6f144d",
          700: "#6f144d",
          800: "#6f144d",
          900: "#6f144d",
        },
        testcolor: {
          50: "#e7eaf0",
          100: "#c1cadb",
          200: "#9aa7c2",
          300: "#7386a9",
          400: "#566c99",
          500: "#37548a",
          600: "#314c81",
          700: "#284376",
          800: "#223969",
          900: "#192951",
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
