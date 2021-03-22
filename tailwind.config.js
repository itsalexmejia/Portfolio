module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        brand: {
          50: "#4F71C9",
          100: "#3B61C0",
          200: "#3456AA",
          300: "#2D4B94",
          400: "#273F7E",
          500: "#203468",
          600: "#192951",
          700: "#162346",
          800: "#121D3B",
          900: "#0E182F",
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
