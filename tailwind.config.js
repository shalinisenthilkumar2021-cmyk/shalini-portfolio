/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          950: '#050507',
          900: '#0a0a0f',
          800: '#111118',
          700: '#1a1a25',
          600: '#252535',
        },
        accent: {
          DEFAULT: '#7c6af7',
          light: '#a99fff',
          glow: 'rgba(124,106,247,0.25)',
        },
        teal: {
          accent: '#2dd4bf',
        },
        surface: 'rgba(255,255,255,0.03)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
