const { createTheme } = require("@mui/material");

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#5A20CB",
    },
    black: {
      main: "#242B2E",
    },
    background: {
      main: "#000000",
      default: "#0D0D0D",
      paper: "#2d3738",
    },
    textColor: {
      main: "#111111",
    },
  },
});
