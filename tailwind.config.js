/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionDuration: {
        2000: '2000ms',
      },
      boxShadow: {
        'light-white': '0px 8px 24px rgba(255,255,255,0.2)',
      },
    },
  },
  plugins: [],
}
