import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#000000",
    },
    background: {
      default: "#424242",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          // backgroundImage: `url(${imagebgdark})`,
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
