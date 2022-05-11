import React from "react";
import { Link as RouteLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Logo from "./images/unicalogo.png";
import CopyrightUnica from "./tools/CopyrightUnica";
import "./tools/css.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  submit: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(2, 0, 2),
  },
  form: {
    marginTop: theme.spacing(4),
  },
  footer: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  linkbasic: {
    fontSize: "1.2rem",
    textDecoration: "none",
    fontWeight: "500",
  },
}));

export default function Intro() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={"span"}
            className={classes.toolbarTitle}
          ></Typography>
          <RouteLink
            to="/discover"
            className={classes.submit}
            style={{
              textDecoration: "none",
            }}
          >
            <Button color="default" className="disc">
              {"Discover"}
            </Button>
          </RouteLink>
          <RouteLink to="/login" style={{ textDecoration: "none" }}>
            <Button
              color="primary"
              variant="outlined"
              className={classes.submit}
            >
              {"Sign In"}
            </Button>
          </RouteLink>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container component="main" className={classes.heroContent}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Box pt={2}>
              <div className="image-responsive">
                <img src={Logo} alt="logo" />
              </div>
            </Box>
          </Grid>
          <Grid item>
            <Typography
              style={{
                fontWeight: "500",
                fontSize: "1.8rem",
                fontFamily: "Poppins, sans-serif",
              }}
              align="center"
              color="textSecondary"
              gutterBottom
            >
              The <span className="underline">collaboration</span> platform for{" "}
              <span className="underline">project writing</span>
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid item>
            <Box pt={2}>
              <Button
                style={{
                  fontWeight: "500",
                  fontSize: "1.2rem",
                  borderRadius: "8px",
                }}
                component={RouteLink}
                to="/signup"
                type="submit"
                variant="contained"
                color="primary"
                className="buttpnlgn"
              >
                {"Sign Up"}
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              style={{
                fontWeight: "400",
                fontSize: "18px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {"or"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.linkbasic}>
              <Link
                component={RouteLink}
                to="/discover"
                type="submit"
                color="primary"
              >
                {"Continue as a guest"}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* End hero unit */}
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box pt={4}>
          <CopyrightUnica />
        </Box>
      </Container>
      {/* End footer */}
    </div>
  );
}
