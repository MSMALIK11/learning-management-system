/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "color-theme1": '#fff',
        "color-theme2": '#222'
      },
      textColor: {
        "color-theme1": '#222',
        "color-theme2": '#fff'
      },
      fontFamily: {
        josefin: "Josefin Sans",
      },
      colors: {
        brand: '#1B59F8',
        darkPrimary: "rgba(28, 28, 36, 1)",
        darkLight: "rgba(41, 41, 50, 1)",
        darkShoft: "rgba(65, 65, 77, 1)",
        borderShoft: "rgba(41, 42, 50, 1)",
        muted: "#646464",
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121'
        },
      }
    },
  },
  // safelist: [
  //   {
  //     pattern: /text-color-(theme1)/
  //   },
  //   {
  //     pattern: /bg-color-(theme1))/
  //   },
  // ],
  plugins: [],
}
