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
import CopyrightUnica from "./CopyrightUnica";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
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
    padding: theme.spacing(4, 0, 4),
  },
  form: {
    marginTop: theme.spacing(4),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(25),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(0),
    },
  },
}));

const footers = [
  /* Dummy data */
  {
    title: "University",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function Intro() {
  const classes = useStyles();

  return (
    <React.Fragment>
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
            className={classes.toolbarTitle}
          >
            UNICA
          </Typography>
          <nav>
            <RouteLink to="/discover" style={{ textDecoration: "none" }}>
              <Link
                variant="button"
                color="textPrimary"
                className={classes.submit}
                style={{ textDecoration: "none" }}
              >
                Discover
              </Link>
            </RouteLink>
          </nav>
          <RouteLink to="/login" style={{ textDecoration: "none" }}>
            <Button
              color="primary"
              variant="outlined"
              className={classes.submit}
            >
              Login
            </Button>
          </RouteLink>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container component="main" className={classes.heroContent}>
        <Typography align="center">
          <img src={Logo} alt="logo" />
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          University Cooperation Articles
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Unica is a researcher&apos;s collaborative web site
        </Typography>
        <form className={classes.form} align="center" noValidate>
          <Button
            component={RouteLink}
            to="/signup"
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            GET STARTED HERE
          </Button>
        </form>
      </Container>
      {/* End hero unit */}
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <CopyrightUnica />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
