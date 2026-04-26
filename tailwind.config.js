/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
    "./gallery/**/*.{html,js}",
    "./contact.html"
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#E67E22',
        'electric-purple': '#628141',
        'cyber-yellow': '#E5D9B6',
        'dark-bg': '#151713',
        'olive-deep': '#40513B',
        'olive-green': '#628141',
        'parchment': '#E5D9B6',
        'burnt-orange': '#E67E22',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slow-reverse': 'spin 8s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
