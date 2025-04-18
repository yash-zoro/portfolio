import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Josefin Sans"', 'sans-serif'], // Set Josefin Sans as the default sans-serif font
      },
    },
  },
});
