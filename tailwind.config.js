/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'weather-blue': '#3B82F6',
        'weather-light-blue': '#60A5FA',
        'weather-dark-blue': '#1E40AF',
      },
    },
  },
  plugins: [],
}
