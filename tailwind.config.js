/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
      },
      colors: {
        'primary': '#BFA05C',
        'secondary': '#010103',
      }
    },
  },
  plugins: [],
}

