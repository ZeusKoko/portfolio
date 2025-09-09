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
        'neon-blue': '#00f7ff',
        'electric-purple': '#b300ff',
        'cyber-yellow': '#ffee00',
        'dark-bg': '#0a0a0a',
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
