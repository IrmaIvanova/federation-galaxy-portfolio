const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    path.join(__dirname, "../../packages/shared/src/**/*.{js,ts,jsx,tsx}"),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Светлая тема 
        light: {
          accent: {
            DEFAULT: '#A6FF00',
            50: '#f7ffe6',
            100: '#ecffcc',
            200: '#d9ff99',
            300: '#c2ff66',
            400: '#a6ff00',
            500: '#8ce600',
            600: '#73cc00',
            700: '#5ab300',
            800: '#428000',
            900: '#2a6600',
          },
          gray: {
            DEFAULT: '#C2C2C2',
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#c2c2c2',
            500: '#a3a3a3',
            600: '#737373',
            700: '#525252',
            800: '#404040',
            900: '#262626',
          },
          background: {
            DEFAULT: '#FFFFFF',
            card: '#F8F8F8',
            muted: '#F5F5F5',
          },
          copy: {
            DEFAULT: '#111111',
            muted: '#666666',
            subtle: '#999999',
          }
        },
        // Темная тема
        dark: {
          accent: {
            DEFAULT: '#FFA200',
            50: '#fff9eb',
            100: '#ffefc6',
            200: '#ffdf91',
            300: '#ffca51',
            400: '#ffa200',
            500: '#ff9200',
            600: '#e67200',
            700: '#bf5100',
            800: '#984000',
            900: '#7a3500',
          },
          gray: {
            DEFAULT: '#8B0D98',
            50: '#fdf4ff',
            100: '#fae8ff',
            200: '#f5d0fe',
            300: '#f0abfc',
            400: '#e879f9',
            500: '#d946ef',
            600: '#c026d3',
            700: '#a21caf',
            800: '#8B0D98',
            900: '#701a75',
          },
          background: {
            DEFAULT: '#111111',
            card: '#1a1a1a',
            muted: '#222222',
          },
          copy: {
            DEFAULT: '#FFFFFF',
            muted: '#CCCCCC',
            subtle: '#888888',
          }
        }
      },
      fontFamily: {
        // sans: ['"Science Gothic"', ...defaultTheme.fontFamily.sans],
        'science': ['"Science Gothic"', 'sans-serif'],
        'rubik-burned': ['"Rubik Burned"', 'display'],
        'sans': ['Inter', 'system-ui', 'sans-serif'], // оставляем как fallback
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-dark': '0 2px 15px -3px rgba(0, 0, 0, 0.3), 0 10px 20px -2px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}