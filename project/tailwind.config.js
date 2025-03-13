/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A3FF',
          dark: '#0082CC',
          light: '#33B5FF'
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          dark: '#000000',
          light: '#333333'
        },
        accent: {
          DEFAULT: '#FF3D00',
          dark: '#CC3100',
          light: '#FF6433'
        },
        neutral: {
          DEFAULT: '#F5F5F5',
          dark: '#E0E0E0',
          light: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
};