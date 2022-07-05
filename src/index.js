import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CustomThemeProvider from "../src/components/tools/themes/CustomThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-poppins";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <CustomThemeProvider>
    <CssBaseline />
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </CustomThemeProvider>,
  document.getElementById("root")
);
