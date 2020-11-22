import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import Logo from "./images/error404.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(10),
  },
  image: {
    maxWidth: "100%",
  },
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h4">
            Error 404:
          </Typography>
          <Typography align="center" color="textSecondary" variant="h4">
            The page you are looking for isn’t here
          </Typography>
          <Box textAlign="center">
            <img className={classes.image} src={Logo} />
          </Box>
          <Typography align="center" color="textSecondary" variant="subtitle1">
            Go home by
            <RouteLink to="/dashboard" style={{ textDecoration: "none" }}>
              &nbsp;clicking here
            </RouteLink>
            !
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
