/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/Header.jsx",
    "./src/MainSection.jsx",
    "./src/CreationsGrid.jsx",
    "./src/Footer.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Josefin Sans",
        serif: "Alata",
      },
    },
  },
  plugins: [],
};
