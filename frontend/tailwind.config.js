/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        logoFont: ['"Playwrite AU VIC Guides"', 'serif'],       }
    },
  },
  plugins: [],
}