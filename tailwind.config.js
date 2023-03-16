/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      yellow: {
        "50": "#09EFD3",
        "100": "#F3BA2F",
      },
      black: {
        "50": "#848484",
        "100": "#171717",
      },
      white: {
        "50": "#A09FAF",
        "100": "#fff",
      },
      seagreen: {
        "50": "#48D6D2",
      },
      gray: {
        "50": "#333333",
        "100": "#202020",
      }
    },
    fontFamily: {
      'inter': ["'Inter', sans-serif"],
      'montserat': ["'Montserrat', sans-serif"],
      'poppins': ["'Poppins', sans-serif"],
      'oswald': ["'Oswald', sans-serif"]
    }
  },
  plugins: [],
}
