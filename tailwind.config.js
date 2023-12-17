/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'poppins': ['Poppins', 'sans-serif'],
      'Cormorant':[ 'Cormorant Garamond','sans-serif'],
      'Rubik':['Rubik Distressed' ,'sans-serif']
    }
  },
  plugins: [],
}