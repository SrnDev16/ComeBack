/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      fontFamily:{
       "SeymourOne": ["Seymour One", "sans-serif"]
      }
    },
  },
  plugins: [],
}

