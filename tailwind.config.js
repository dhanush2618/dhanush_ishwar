/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Site semantic palette (violet-black theme with royal purple and electric cyan)
        'site-bg': '#0F0B1A',        // deep violet-black background
        'site-surface': '#1A1525',   // slightly lighter surface for cards/sections
        primary: '#EDEAF2',          // pale white-violet (primary text)
        secondary: '#B8B5BE',        // muted violet-grey (secondary text)
        'accent-purple': '#9A4DFF',  // royal purple (accent 1 - power + imagination)
        'accent-cyan': '#00F0FF',    // electric cyan (accent 2 - contrast)
        'accent-hover': '#B388FF',   // soft purple for hover states
        btn: '#9A4DFF',              // button color (royal purple)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
