import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#5B8CFF',
          foreground: '#F8FAFF'
        }
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      },
      boxShadow: {
        soft: '0 10px 40px -20px rgba(91, 140, 255, 0.5)'
      }
    }
  },
  plugins: []
};

export default config;
