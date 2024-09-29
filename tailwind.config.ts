import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-regular': ['var(--font-sf-regular)', 'sans-serif', 'system-ui'],
        'sf-medium': [
          'var(--font-sf-medium)',
          'ui-monospace',
          'SFMono-Regular',
        ],
        'product-sans': [
          'var(--font-product-sans)',
          'ui-sans-serif',
          'system-ui',
        ],
      },
      screens: {
        lg: '1024px',
        xl: '1280px',
        '2xl': '1660px',
        'max-small': { max: '1023px' },
      },
      colors: {
        primary: '#6f8bc3',
        'primary-dark': '#6482AD',
        'primary-darker': '#1e2c48',
        'primary-light': '#7FA1C3',
        'primary-lighter': '#E2DAD6',

        btn: '#6366F1',
        'btn-secondary': '#4F46E5',

        secondary: '#0f1624',
        'secondary-content': '#8bc36f',
        'secondary-dark': '#000000',
        'secondary-light': '#2c481e',

        background: '#1a1a1a',
        foreground: '#262626',
        border: '#404040',

        copy: '#fbfbfb',
        'copy-light': '#d9d9d9',
        'copy-lighter': '#a6a6a6',

        success: '#0f240f',
        warning: '#24240f',
        error: '#240f0f',

        'success-content': '#6fc36f',
        'warning-content': '#c3c36f',
        'error-content': '#c36f6f',

        'glass-bg': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  // eslint-disable-next-line
  plugins: [require('tailwindcss-animate')],
};
export default config;
