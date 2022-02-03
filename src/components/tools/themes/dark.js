import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    fontWeight: "400",
    button: {
      textTransform: "none",
      fontSize: "1rem",
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
          fontFamily: "Poppins, sans-serif",
          color: "#000000",
          backgroundPosition: "center center",
          backgroundColor: "#303030",
        },
      },
    },
  },
});

export default theme;
