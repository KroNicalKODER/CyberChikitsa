/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
      "2xl": { max: "1536px" },
    },
    extend: {
      colors: {
        "background": '#200040',
        "bg-blue": '#000340',
        "bg-violet": "#200040",
        "grad-left": '#984900',
        "grad-right": '#FFA149',
        "purple-btn": '#830098',
      },
      gridTemplateColumns: {
        'custom': '2fr 3fr',
      },
      fontFamily: {
        'serif': ['Baloo2-Med']
      }
    },
  },
  plugins: [],
};
