/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom fonts for different sections
      fontFamily: {
        mulish:['Mulish','sans-serif'],
        body: ['Merriweather', 'serif'],
        accent: ['"Great Vibes"', 'cursive'],
      },
      fontWeight: {
        bold: 700,
        medium: 500,
      },
      fontSize: {
        '5xl': ['3rem', '1.2'],
        '2xl': ['1.5rem', '1.6'],
      },
      colors: {
        neon: '#39ff14', // Custom neon green color
      },
      // Keyframes for animations
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'text-pop-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(-10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      // Animation configurations
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'text-pop-in': 'text-pop-in 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
