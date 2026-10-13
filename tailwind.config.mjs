/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      // every colour is a CSS variable so the theme toggle can swap palettes
      colors: {
        night: {
          DEFAULT: 'rgb(var(--night) / <alpha-value>)',
          2:       'rgb(var(--night-2) / <alpha-value>)',
          3:       'rgb(var(--night-3) / <alpha-value>)',
        },
        line:  'rgb(var(--line) / <alpha-value>)',
        ink:   'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        faint: 'rgb(var(--faint) / <alpha-value>)',
        dusk: {
          DEFAULT: 'rgb(var(--dusk) / <alpha-value>)',
          deep:    'rgb(var(--dusk-deep) / <alpha-value>)',
        },
        lamp: {
          DEFAULT: 'rgb(var(--lamp) / <alpha-value>)',
          soft:    'rgb(var(--lamp-soft) / <alpha-value>)',
          deep:    'rgb(var(--lamp-deep) / <alpha-value>)',
        },
      },
      fontFamily: {
        serif: ['var(--font-display)'],
        sans:  ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
