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
        // トップページ（2026/10 リニューアル）の新しい色
        bl: {
          cream: '#FBF6EE',
          cream2: '#F5EEE3',
          card: '#FFFCF7',
          orange: '#EF4B23',
          blue: '#2350B8',
          ink: '#22201E',
          body: '#4D4640',
          sub: '#6B625A',
          faint: '#9A8F84',
          line: '#E6DCCD',
          line2: '#E0D4C3',
        },
      },
      fontFamily: {
        mincho: ['"Shippori Mincho"', 'serif'],
        garamond: ['"Cormorant Garamond"', 'serif'],
        notojp: ['"Noto Sans JP"', '"Yu Gothic"', 'sans-serif'],
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
