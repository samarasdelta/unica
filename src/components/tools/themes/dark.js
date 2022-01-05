import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#424242",
    },
    color: {
      default: "#000000",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          color: "#000000",
          backgroundPosition: "center center",
          backgroundColor: "#303030",
        },
      },
    },
  },
});

export default theme;
