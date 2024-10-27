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
      backgroundImage: {


        'custom-gradient': 'linear-gradient(113.47deg, #D6FCD2 0%, #E0FDFA 28.34%, #E4E5EA 58.67%, #E0E2F4 99.45%)',
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

