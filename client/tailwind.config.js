/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jaini: ['Jaini', 'sans-serif'], // You can replace 'sans-serif' with a fallback font if needed
      },
      colors: {
        gradientStart: '#D8D2FC',
        gradientMiddle: '#FDE2E0',
        gradientMiddle2: '#E6E4EA',
        gradientEnd: '#E0E9F4',
      },
    },
  },
  plugins: [],
}

