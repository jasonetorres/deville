/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6E8CF',
        ink: '#2B2118',
        forest: '#536B4A',
        slateblue: '#233B5D',
        rust: '#B45332',
        amber: {
          DEFAULT: '#D89A3D',
          light: '#E8BE75',
        },
        wood: {
          light: '#B8743A',
          DEFAULT: '#8C4F27',
          dark: '#5C321D',
        },
        wall: '#E5C99F',
        terminal: {
          bg: '#16263D',
          green: '#8FC28A',
          cyan: '#A9D6E8',
          dim: '#53657D',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        paper: '0 12px 30px rgba(58, 35, 20, 0.18)',
        'paper-sm': '0 6px 14px rgba(58, 35, 20, 0.16)',
        'paper-lg': '0 20px 48px rgba(58, 35, 20, 0.24)',
        'paper-lift': '0 18px 38px rgba(58, 35, 20, 0.24)',
        frame: 'inset 0 0 0 2px rgba(255,255,255,.14), 0 18px 42px rgba(58,35,20,.28)',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-7px) rotate(1deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        blink: {
          '0%, 92%, 100%': { opacity: '1' },
          '95%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-1deg)' },
          '75%': { transform: 'rotate(1deg)' },
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
