module.exports = {
  content: [
    "./src/data/*.js",
    "./src/views/*.{js,jsx}",
    "./src/components/*.{js,jsx}",
    "./src/Main.jsx",
    "./src/index.js",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          c00: "#0d1011", // main page title text
          c01: "#1b2022", // main page second text and project title text
          c02: "#293033", // section items second text
          c03: "#313b3e", // active menu item and paragraph title text
          c04: "#3b464a", // paragraph text
          c05: "#3f4b4f", // page title text and paragraph line
          c06: "#48565a",
          c07: "#516065", // main page third text and section items third text in paragraphs
          c08: "#55666b", // project second text and button and hover background
          c09: "#627378", // main page line
          c10: "#839095", // active item border
          c11: "#adb5b8", // in-active menu item
          c12: "#cdcdcd", // home page background
          c13: "#eff0f1", // project and contact hover second text and page background and button text
          c14: "#f7f7f7", // project and contact hover title text
        },
      },
      fontFamily: {
        PatrickHand: ["PatrickHand"],
      },
    },
  },
  plugins: [],
};
