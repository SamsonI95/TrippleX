/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "tx-primary": "#101828",
        "tx-secondary": "#344054",
        "tx-tertiary": "#475467",
      },
      screens: {
        // {'max': '1535px'}
        "sm": "320px",
        "md": "768px",
        "lg": "1360px",
        "xlg": "1440px"
      },
    },
  },
  plugins: [],
};
