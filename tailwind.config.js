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
        primary: '#2563EB',
        'bright-blue': '#3B82F6',
        'dark-blue': '#1D4ED8',
        'deep-navy': '#0F172A',
        'hero-bg': '#EEF4FF',
        'soft-bg': '#F8FAFC',
        'main-text': '#0F172A',
        'body-text': '#475569',
        'muted-text': '#64748B',
        border: '#E2E8F0',
        'active-border': '#BFDBFE',
        'purple-accent': '#8B5CF6',
        'light-purple': '#F5F3FF',
        'success-green': '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradientX 6s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        gradientX: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
    },
  },
  plugins: [],
}

