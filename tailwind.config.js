/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 20px 30px -10px rgba(38, 57, 77, 1)',
      },
    },
  },
  plugins: [],
}

