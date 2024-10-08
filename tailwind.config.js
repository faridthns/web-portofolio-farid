/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myprimary' : '#181C14',
        'mysecondary' : '#3C3D37',
        'mygreen' : '#697565',
        'mycream' : '#ECDFCC',
        'plus' : '#FF6500',
      }
    },
  },
  plugins: [],
}
