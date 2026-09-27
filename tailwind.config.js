/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        navy: '#03045e',
        ink: '#07113d',
        cardInk: '#0b1748',
        aquaDark: '#00689d',
      },
      boxShadow: {
        glass: '0 24px 70px rgba(72,202,228,0.13), inset 0 1px rgba(255,255,255,0.92)',
        button: '0 10px 28px rgba(72,202,228,0.16), inset 0 1px rgba(255,255,255,0.95)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
