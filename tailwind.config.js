/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        babas:["'Bebas Neue', sans-serif"],
        press:["'Press Start 2P', cursive"],
        robato:["'Roboto', sans-serif"]  
      },
      colors:{
        primary:'#FFB428',
        secondary:"#E100A8",
        tertiary:"#000000"
      }

    },
 
  },
  plugins: [require("daisyui")],
}

