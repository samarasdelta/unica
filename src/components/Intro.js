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
    padding: theme.spacing(2, 0, 2),
  },
  form: {
    marginTop: theme.spacing(4),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(6),
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
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
          {/* <Box>
            <img src={Logosmall} alt="logo" />
          </Box> */}
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          ></Typography>
          <nav>
            <div className="disc">
              <RouteLink
                to="/discover"
                className={classes.submit}
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  color="disabled"
                  className="disc"
                  style={{ textTransform: "none" }}
                >
                  {"Discover"}
                </Button>
              </RouteLink>
            </div>
          </nav>
          <RouteLink to="/login" style={{ textDecoration: "none" }}>
            <Button
              color="primary"
              variant="outlined"
              className={classes.submit}
            >
              {"Login"}
            </Button>
          </RouteLink>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container component="main" className={classes.heroContent}>
        <Box pt={8}>
          <div align="center">
            <img src={Logo} alt="logo" />
          </div>
        </Box>
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
        <Grid container direction="column" alignItems="center">
          <Box>
            <Button
              style={{
                fontWeight: "500",
                textTransform: "none",
                marginTop: "30px",
                fontSize: "18px",
                backgroundColor: "#5C92FF",
                marginBottom: "15px",
                marginRight: "15px",
                float: "right",
                borderRadius: "8px",
              }}
              component={RouteLink}
              to="/signup"
              type="submit"
              variant="contained"
              color="primary"
              className="buttpnlgn"
            >
              {"Sign up"}
            </Button>
          </Box>
          <Box pb={1}>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: "18px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {"or"}
            </Typography>
          </Box>
          <div className="footerlinks">
            <Link
              component={RouteLink}
              to="/discover"
              type="submit"
              color="primary"
            >
              {"Continue as a guest"}
            </Link>
          </div>
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
