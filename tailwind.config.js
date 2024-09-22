/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sansJoseph: '"Josefin Sans", sans-serif',
      },
      boxShadow: {
        brandCard:
          "0 6px 10px #757c7e1a,0 3px 20px #757c7e26,0 3px 4px #757c7e33",
        inner_right: "inset -20px 0px 10px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        _gray: "#17262b",
        _green: "#39b75d",
        _lightGray: "#f7f7f7",
      },
    },
  },
  plugins: [],
};
