/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['"Red Hat Display", sans-serif'],
    },
    extend: {
      colors: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'v-pale-blue': 'hsl(225, 100%, 98%)',
        'desat-blue': 'hsl(224, 23%, 35%)',
        'd-blue': 'hsl(223, 47%, 23%)',
      },
    },
  },
  plugins: [],
};
