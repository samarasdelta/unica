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
          // backgroundImage: `url(${imagebgdark})`,
          backgroundPosition: "center center",
          backgroundColor: "#303030",
          // height: "100vh",
          // backgroundRepeat: "no-repeat",
        },
      },
    },
  },
  shadows: ["0px 3px 6px 1px rgb(38 107 193 / 8%)"],
});

export default theme;
