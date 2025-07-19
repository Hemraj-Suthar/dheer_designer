// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         "./index.html",
//         "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [require('daisyui')],
// }

import { defineConfig } from 'vite';
import { defineConfig as defineTailwindConfig } from 'tailwindcss';
import daisyui from 'daisyui';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
});
