import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
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
