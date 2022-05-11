import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
// import { Link as RouteLink } from "react-router-dom";
// import { Link } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import Map from "./Map";
import "./css.css";

// const useStyles = makeStyles({
//   linkbasic: {
//     fontSize: "1.6rem",
//     textDecoration: "none",
//     fontWeight: "500",
//   },
// });

export default function CopyrightUnica() {
  // const classes = useStyles();
  return (
    <Grid>
      <Map />
      {/* <Grid
        spacing={2}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.linkbasic}>
            <Link
              target="_blank"
              component={RouteLink}
              to="/terms"
              type="submit"
              color="primary"
            >
              {"Terms"}
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.linkbasic}>
            <Link
              target="_blank"
              component={RouteLink}
              to="/privacy"
              type="submit"
              color="primary"
            >
              {"Privacy Policy"}
            </Link>
          </Typography>
        </Grid>
      </Grid> */}

      <Box pt={2}>
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
