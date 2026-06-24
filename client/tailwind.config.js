/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0F1115',
          card: '#1A1F2E',
          border: '#2A3142',
        },
        accent: '#3B82F6',
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        card: '0 4px 12px -2px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
