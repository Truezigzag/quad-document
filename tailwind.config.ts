import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#04050B',
        ember: '#FF7A5C',
        glow: '#A78BFA',
        mist: '#8FA3BF'
      },
      boxShadow: {
        aura: '0 0 40px rgba(167, 139, 250, 0.25)',
        ember: '0 0 30px rgba(255, 122, 92, 0.35)'
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at 20% 20%, rgba(167,139,250,0.1) 0%, transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,122,92,0.12) 0%, transparent 35%)'
      }
    }
  },
  plugins: []
};

export default config;
