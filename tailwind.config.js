/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        dark: {
          bg: '#161618',
          surface: '#1f1f22',
        }
      },
      boxShadow: {
        'glow': '0 0 20px -5px rgba(125, 156, 139, 0.3)',
        'soft': '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
        'float': '0 20px 40px -10px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}