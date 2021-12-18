import { createTheme } from "@material-ui/core";

const theme = createTheme({
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
          // backgroundImage: `url(${imagebgnormal})`,
          backgroundPosition: "center center",
          // height: "100vh",
          // backgroundRepeat: "no-repeat",
        },
      },
    },
  },
  shadows: ["0px 3px 6px 1px rgb(38 107 193 / 8%)"],
});

export default theme;
