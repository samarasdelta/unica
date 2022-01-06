import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
  },
  palette: {
    primary: {
      main: "#1565c0",
    },
    background: {
      default: "#ffffff",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundPosition: "center center",
          backgroundColor: "#fafafa",
        },
      },
    },
  },
});

export default theme;