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
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#164E63",
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
