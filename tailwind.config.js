/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      width: {
        half: "60vw"
      },
      height: {
        half: "60vh"
      },
      colors: {
        biru: "#3F4B7D",
        merah: "#DC4F55",
        kuning: "#F9D864",
        hijau: "#3E964C",
      },
      fontFamily: {
        PlayfairDisplay: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}

