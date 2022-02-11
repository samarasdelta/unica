import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    fontWeight: "400",
    button: {
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: "400",
    },
  },
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
          backgroundColor: "#303030",
        },
      },
    },
  },
});

export default theme;
