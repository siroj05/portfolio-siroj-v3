/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        mc: {
          bg:          '#0D0D0D',
          panel:       '#111111',
          border:      '#2A2A2A',
          green:       '#55FF55',
          'dark-green':'#00AA00',
          yellow:      '#FFFF55',
          aqua:        '#55FFFF',
          white:       '#F8F8F0',
          gray:        '#AAAAAA',
          'dark-gray': '#555555',
          red:         '#FF5555',
        },
      },
      fontFamily: {
        minecraft: ['"Press Start 2P"', 'monospace'],
        mono:      ['"Share Tech Mono"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-green':  '0 0 10px rgba(85,255,85,0.55), 0 0 30px rgba(85,255,85,0.2)',
        'glow-yellow': '0 0 10px rgba(255,255,85,0.55), 0 0 30px rgba(255,255,85,0.2)',
        'glow-aqua':   '0 0 10px rgba(85,255,255,0.45), 0 0 25px rgba(85,255,255,0.15)',
        'mc':          '4px 4px 0 #00AA00',
        'mc-slot':     'inset 2px 2px 0 rgba(255,255,255,0.1), inset -2px -2px 0 rgba(0,0,0,0.6)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'scan': {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
