import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'primary-text': 'var(--primary-text-color)',
        'secondary-text': 'var(--secondary-text-color)',
        'primary-border': 'var(--primary-border-color)'
      }
    }
  },
  plugins: []
} satisfies Config;
