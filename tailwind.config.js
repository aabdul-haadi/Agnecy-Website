/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#6366f1',
        secondary: '#4f46e5',
        accent: '#06b6d4',
        neon: {
          blue: '#00f2fe',
          purple: '#8e2de2',
          pink: '#ff1361',
        },
        background: {
          light: '#ffffff',
          dark: '#0a0a0f'
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%, 100%': { 
            'box-shadow': '0 0 20px rgba(99, 102, 241, 0.5)',
            opacity: 1 
          },
          '50%': { 
            'box-shadow': '0 0 40px rgba(99, 102, 241, 0.8)',
            opacity: 0.8 
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};