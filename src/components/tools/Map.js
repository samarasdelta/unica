import React from "react";
import {
  CssBaseline,
  makeStyles,
  Grid,
  Container,
  Box,
  Typography,
} from "@material-ui/core/";
import "./css.css";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  typoBasic: {
    fontWeight: "500",
    fontSize: "1.6rem",
  },
  typoBlue: {
    fontWeight: "500",
    fontSize: "1.3rem",
  },
  typoDefault: {
    fontWeight: "500",
    fontSize: "19.2px",
  },
}));

export default function Map() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      {/* End hero unit */}
      {/* Footer */}
      <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography color="error" className={classes.typoBasic}>
            {"Why use UNI"}
          </Typography>
          <Typography color="primary" className={classes.typoBlue}>
            {"versity"}
          </Typography>
          <Typography color="error" className={classes.typoBasic}>
            {"C"}
          </Typography>
          <Typography color="primary" className={classes.typoBlue}>
            {"ooperation "}
          </Typography>
          <Typography color="error" className={classes.typoBasic}>
            {"A"}
          </Typography>
          <Typography color="primary" className={classes.typoBlue}>
            {"rticles "}
          </Typography>
          <Typography color="error" className={classes.typoBasic}>
            {"?"}
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item>
            <Box pt={2}>
              <Typography
                className={classes.typoDefault}
                color="textSecondary"
                gutterBottom
              >
                {"Unica is a researcher's collaborative website."}
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Typography
              className={classes.typoDefault}
              color="textSecondary"
              gutterBottom
            >
              Here, a writer of scientific articles can find other writers, all
              over the world, who want to work on the same article and publish
              it together. The first author proposes his article (an idea or
              even semi-finished work) by giving a title and a short abstract.
              He also gives an e-mail and possibly a phone number. Then these
              two persons can contact in any way and work together till the
              finishing of their article.
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              className={classes.typoDefault}
              color="textSecondary"
              gutterBottom
            >
              All scientific fields are served on this website: Philosophy,
              Mathematics, Geometry, Litterature, Engineering, Mechanics,
              Informatics, Theology, Medicine, Physics, Fine Arts, etc.
            </Typography>
          </Grid>
        </Grid>

        <Box my={1}>
          <Typography
            className={classes.typoDefault}
            style={{
              textAlign: "center",
            }}
            color="textSecondary"
            gutterBottom
          >
            Ideal for researchers, collaborators, students, and writers.
          </Typography>
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
