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
          <Typography color="textPrimary" className={classes.typoBasic}>
            {"Why use UNI"}
          </Typography>
          <Typography color="primary" className={classes.typoBlue}>
            {"versity"}
          </Typography>
          <Typography color="textPrimary" className={classes.typoBasic}>
            {"C"}
          </Typography>
          <Typography color="primary" className={classes.typoBlue}>
            {"ooperation "}
          </Typography>
          <Typography color="textPrimary" className={classes.typoBasic}>
            {"A"}
          </Typography>
          <Typography color="primary" className={classes.typoBlue}>
            {"rticles "}
          </Typography>
          <Typography color="textPrimary" className={classes.typoBasic}>
            {"?"}
          </Typography>
          <Box mx={2} m={2}>
            <Typography
              className={classes.typoDefault}
              color="textSecondary"
              style={{
                textAlign: "center",
              }}
              gutterBottom
            >
              {"Unica is a collaborative website for researchers."}
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item>
            <Typography
              className={classes.typoDefault}
              color="textSecondary"
              gutterBottom
            >
              A writer of scientific papers can use this site to connect with
              other writers from across the world who want to collaborate on the
              same topic and publish it together. The first author introduces
              his article (a concept or even a half-completed project) with a
              title and a brief abstract. He also provides an e-mail address.
              Then these two people can communicate in any way they like and
              collaborate till their paper is completed.
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              className={classes.typoDefault}
              color="textSecondary"
              gutterBottom
            >
              Philosophy, Mathematics, Geometry, Literature, Engineering,
              Mechanics, Informatics, Theology, Medicine, Physics, Fine Arts,
              and other scientific fields are all covered on this website.
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
            Researchers, collaborators, students, and writers will love it.{" "}
          </Typography>
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
