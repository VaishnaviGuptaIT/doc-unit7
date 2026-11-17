/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        devops: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0284c7',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          darkBg: '#0b0f19',
          darkCard: '#111827',
          darkBorder: '#1f2937',
        },
        aws: {
          orange: '#FF9900',
          dark: '#232F3E',
          light: '#FFF7ED',
        },
        azure: {
          blue: '#0089D6',
          dark: '#002050',
          light: '#F0F9FF',
        },
        gcp: {
          blue: '#4285F4',
          dark: '#1A73E8',
          light: '#EEF2FF',
        },
        accent: {
          purple: '#8B5CF6',
          violet: '#7C3AED',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
