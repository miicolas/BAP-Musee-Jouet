/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        btnshadow: "-4px 6px 0px -2px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  safelist: [
    'bg-red-500', 'bg-yellow-500', 'bg-green-500',
    'text-red-500', 'text-yellow-500', 'text-green-500',
  ],
  plugins: [],
}

