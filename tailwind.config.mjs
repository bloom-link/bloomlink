/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sage: '#355E48',
        pink: '#DFA2AE',
        pinkLight: '#E8B8BE',
        beige: '#F7F0E9',
        cream: '#FAF8F4',
      },
      fontFamily: {
        sans: [
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Noto Sans JP"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
