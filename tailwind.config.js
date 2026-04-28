/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2770',
          dark: '#111A55',
          light: '#2E3D9E',
        },
        orange: {
          DEFAULT: '#D4601A',
          light: '#E8813F',
        },
        gray: {
          light: '#F5F6FA',
          mid: '#E2E5F0',
          text: '#6B7280',
        },
        text: {
          dark: '#0D1340',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
