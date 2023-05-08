/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '0%' : { opacity:'1'},
          '100%' : {opacity:'0'}
        } 
      },
      animation: {
        fadeOut: 'fadeOut 4s ease-out'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      "black",
    ],
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    // darkTheme: "black",
  },
}