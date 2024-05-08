import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'raspberry': {
          DEFAULT: '#D81159',
          '50': '#fef1f7',
          '100': '#fde6f2',
          '200': '#fdcde5',
          '300': '#fda4cf',
          '400': '#fb6bae',
          '500': '#f4408f',
          '600': '#e41e6b',
          '700': '#d81159',
          '800': '#a41044',
          '900': '#88133c',
        },
        'ghost-white': {
          DEFAULT: '#F3F4FA',
          '50': '#f3f4fa',
          '100': '#e5e7f4',
          '200': '#d2d6eb',
          '300': '#b2bade',
          '400': '#8d97cd',
          '500': '#7278bf',
          '600': '#5f61b1',
          '700': '#5754a1',
          '800': '#4c4984',
          '900': '#403e6a',
        },
        'rich-black': {
          DEFAULT: '#0F1020',
          '50': '#f0f4fd',
          '100': '#e4ebfb',
          '200': '#cedaf7',
          '300': '#afc1f2',
          '400': '#8fa1ea',
          '500': '#7480e0',
          '600': '#595dd2',
          '700': '#333438',
          '800': '#0f1020',
          '900': '#07070e',
          '1000': '#100f11'
        },
      },
    }
  },
  plugins: [],
};
export default config;
