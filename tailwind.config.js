/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensures Tailwind works with all React component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
