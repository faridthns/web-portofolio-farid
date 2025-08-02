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
        'mygreen2' : '#5F6F65',
        'mycream' : '#ECDFCC',
        'plus' : '#FF6500',
      },
      keyframes: {
        marqueeLg: {
          '0%': { transform: 'translateX(105%)' },
          '100%': { transform: 'translateX(-105%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marqueeLg: 'marqueeLg 10s linear infinite alternate',
        marquee: 'marquee 10s linear infinite alternate',
        'marquee-pause': 'marquee linear infinite paused',
      },
    },
  },
  plugins: [],
}
