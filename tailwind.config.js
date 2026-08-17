/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F2EDE3',
        ink: '#1A1714',
        forest: '#2E5A3C',
        slateblue: '#4B5E7A',
        rust: '#C24A3A',
        amber: {
          DEFAULT: '#E6A33A',
          light: '#F2C56A',
        },
        terminal: {
          bg: '#1E222A',
          green: '#5AF78E',
          cyan: '#7CE3F5',
          dim: '#3A4250',
        },
      },
      fontFamily: {
        display: ['"Bangers"', '"Anton"', 'system-ui', 'sans-serif'],
        body: ['"Patrick Hand"', '"Comic Neue"', 'cursive'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        paper: '4px 6px 0px 0px rgba(26, 23, 20, 0.85)',
        'paper-sm': '2px 3px 0px 0px rgba(26, 23, 20, 0.85)',
        'paper-lg': '8px 12px 0px 0px rgba(26, 23, 20, 0.85)',
        'paper-lift': '10px 16px 0px 0px rgba(26, 23, 20, 0.9)',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        blink: {
          '0%, 92%, 100%': { opacity: '1' },
          '95%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-1.5deg)' },
          '75%': { transform: 'rotate(1.5deg)' },
        },
      },
      animation: {
        bob: 'bob 3s ease-in-out infinite',
        wiggle: 'wiggle 2.5s ease-in-out infinite',
        blink: 'blink 4s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        sway: 'sway 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
