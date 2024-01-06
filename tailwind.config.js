/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: []
    },
    maxWidth: {
      '500': '500px',
    },
    extend: {
      boxShadow: {
        'sm': '1px 1px 3px 1px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        "slideBG": "#14141F",
      }
    },
  },
  plugins: [],
}
