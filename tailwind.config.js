/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace', 'monospace'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0EA5E9',
          light: '#7dd3fc',
        },
        secondary: '#002b5b', // Premium Deep Navy
        accent: '#F97316',
        navy: {
          DEFAULT: '#002b5b',
          light: '#003a7a',
          dark: '#001e3d',
        }
      },
    },
  },
  plugins: [],
};
