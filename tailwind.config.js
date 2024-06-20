/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url('/path/to/your/image.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
}