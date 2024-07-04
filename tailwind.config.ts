import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        whitesmoke: '#D9D9D9',
        darkbrown: '#363020',
        teal: '#177E89',
      },
      fontFamily: {
        dahlia: ['dahlia'],
        dahliarc: ['dahliarc'],
      },
    },
  },
  plugins: [],
};
export default config;
