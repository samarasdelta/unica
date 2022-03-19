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
    primary: {
      main: "#1565c0",
    },
    secondary: {
      main: "#bdbdbd",
    },
    background: {
      default: "#ffffff",
    },
    error: {
      main: "#202020",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#fafafa",
        },
      },
    },
  },
});

export default theme;
