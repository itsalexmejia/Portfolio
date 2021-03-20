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
        brandpurple:{
          DEFAULT: "6f144d",
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
