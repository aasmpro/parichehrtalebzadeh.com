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
        black: "#000000",
        white: "#FCFCFC",
        primary: "#1E74DD",
        secondary: "#76AEF2",
        gray: {
          0: "#242424",
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
        },
      },
      fontFamily: {
        Roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
