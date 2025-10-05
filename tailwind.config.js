/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'around-green': '0 0 15px #10b98180',
        'around-lg-green': '0 0 25px #10b98180',
        'around-blue': '0 0 15px #3b82f680',
        'around-lg-blue': '0 0 25px #3b82f680',
      }
    },
  },
  plugins: [],
}
