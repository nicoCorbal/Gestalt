/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'curated-bg': '#f2f2f2',
        'curated-bg-light': '#f5f5f5',
        'curated-text': '#141414',
        'curated-text-muted': '#737373',
        'curated-text-secondary': '#666666',
        'curated-border': '#ebebeb',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
      },
      lineHeight: {
        'extra-tight': '0.9',
        'super-tight': '0.95',
      },
      maxWidth: {
        'curated': '1400px',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
}
