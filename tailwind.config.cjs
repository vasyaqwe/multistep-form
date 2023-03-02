/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // container: {
    //   screens: {
    //     sm: '640px',
    //     md: '768px',
    //     lg: '1204px',
    //     xl: '1304px',
    //     '2xl': '1204px',
    //   },
    // },
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1204px',
    //   xl: '1304px',
    //   '2xl': '1204px',
    // },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.3075rem',
      'lg': '0.55rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      colors: {
        primary: {
          100: 'hsl(206, 94%, 87%)',
          300: 'hsl(228, 100%, 84%)',
          350: 'hsl(243, 100%, 77%)',
          400: 'hsl(243, 100%, 62%)',
          800: 'hsl(213, 96%, 35%)',
          900: 'hsl(213, 96%, 18%)',
        },
        secondary: {
          400: 'hsl(354, 84%, 57%)',
        },
        neutral: {
          100: "hsl(231, 100%, 99%)",
          150: "hsl(230, 75%, 98%)",
          200: "hsl(217, 100%, 97%)",
          300: "hsl(229, 24%, 87%)",
          400: "hsl(231, 11%, 63%)"
        },
      }
    },
  },
  plugins: [],
}
