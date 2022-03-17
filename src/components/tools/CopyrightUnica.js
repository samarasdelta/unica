import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Map from "./Map";
import "./css.css";

export default function CopyrightUnica() {
  return (
    <Grid>
      <Map />
      <Box my={2}>
        <div className="footerlinks" align="center">
          <a href="/terms" target="_blank">
            {"Terms"}
          </a>
          <a href="/privacy" target="_blank">
            {"Privacy Policy"}
          </a>
        </div>
      </Box>

      <Box>
        <Typography
          color="textSecondary"
          className="textdefault"
          align="center"
        >
          {"© Copyright "}
          {new Date().getFullYear()} {"UNICA"} {"®"}
        </Typography>
      </Box>
    </Grid>
  );
}
