/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss';

// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.disable-scrollbars': {
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
            display: 'none',
          },
          '& *::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
            display: 'none',
          },
          '& *': {
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
          },
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
