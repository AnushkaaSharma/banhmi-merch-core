/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all your React components
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
        'md': '1024px',
        'lg': '1280px',
      },
    },
    colors: {
      neutral: {
        '100': '#FAFAFA',
        '200': '#F4F4F4',
        '300': '#ECECEC',
        '400': '#D8D8D8',
        '500': '#C2C2C2',
        '600': '#A1A1A1',
        '700': '#7B7B7B',
        '800': '#484848',
        '900': '#2C2C2C',
      },
      primary: {
        '500': '#DB9423',
      },
    },
    fontSize: {
      'sm': ['14px', '20px'],
      'p': ['16px', '28px'],
      'h6': ['20px', '32px'],
      'h4': ['32px', '44px'],
      'h5': ['24px', '32px'],
      'h2': ['48px', '52px'],
    },
    fontWeight: {
      light: 300,
      regular: 400,
      semibold: 600,
      bold: 700,
    },
    fontFamily: {
      body: ['Poppins'],
      heading: ['Abril Fatface'],
    },
  },
  plugins: [],
};
