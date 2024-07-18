/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      screens:{
        "tablet": "2900px",
        "smalls": "450px",
        "another": "700px",
        "and":"1400px",
        "again":"1700px"
      }
    },
  },
  plugins: [],
}

