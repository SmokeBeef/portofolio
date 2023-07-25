/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {'Poppins':['Poppins', 'sans-serif']},
      keyframes: {
        textAnimation: {
          '0%': { marginTop: '0' },
          '10%': { marginTop: '0' },
          '20%': { marginTop: '-5.62rem' },
          '30%': { marginTop: '-5.62rem' },
          '40%': { marginTop: '-11.24rem' },
          '60%': { marginTop: '-11.24rem' },
          '70%': { marginTop: '-5.62rem' },
          '80%': { marginTop: '-5.62rem' },
          '90%': { marginTop: '0' },
          '100%': { marginTop: '0' },
        },
      },
      animation: {
        'text-slide': 'textAnimation 8s infinite',
      },
    },
  },
  plugins: [],
}