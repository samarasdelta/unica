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
    lineHeight: 2,
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
          <Typography
            className="maptitle"
            style={{ fontWeight: "500", fontSize: "1.6rem" }}
            color="textPrimary"
          >
            {"Why use UNI"}
          </Typography>
          <Typography
            className="ii"
            style={{ fontWeight: "500", fontSize: "1.6rem" }}
            color="primary"
          >
            {"versity"}
          </Typography>
          <Typography
            className="maptitle"
            style={{ fontWeight: "500", fontSize: "1.6rem" }}
            color="textPrimary"
          >
            {"C"}
          </Typography>
          <Typography
            className="ii"
            style={{ fontWeight: "500", fontSize: "1.6rem" }}
            color="primary"
          >
            {"ooperation "}
          </Typography>
          <Typography
            className="maptitle"
            style={{ fontWeight: "500", fontSize: "1.6rem" }}
            color="textPrimary"
          >
            {"A"}
          </Typography>
          <Typography
            className="ii"
            style={{ fontWeight: "500", fontSize: "1.6rem" }}
            color="primary"
          >
            {"rticles "}
          </Typography>
          <Typography
            className="maptitle"
            style={{ fontWeight: "500", fontSize: "1.6rem" }}
            color="textPrimary"
          >
            {"?"}
          </Typography>
        </Grid>
        <Grid container direction="column" alignItems="center">
          <div className="textdefault">
            <Typography
              component={"span"}
              style={{
                fontWeight: "500",
                fontSize: "19.2px",
                fontFamily: "Poppins, sans-serif",
              }}
              color="textSecondary"
              gutterBottom
            >
              <p>Unica is a researcher&apos;s collaborative website.</p>
            </Typography>
            <Typography
              component={"span"}
              style={{
                fontWeight: "500",
                fontSize: "19.2px",
                fontFamily: "Poppins, sans-serif",
              }}
              color="textSecondary"
              gutterBottom
            >
              <p>
                Here, a writer of scientific articles can find other writers,
                all over the world, who want to work on the same article and
                publish it together. The first author proposes his article (an
                idea or even semi-finished work) by giving a title and a short
                abstract. He also gives an e-mail and possibly a phone number.
                Then these two persons can contact in any way and work together
                till the finishing of their article.
              </p>
            </Typography>
          </div>

          <div className="textdefault">
            <Typography
              style={{
                fontWeight: "500",
                fontSize: "19.2px",
                fontFamily: "Poppins, sans-serif",
              }}
              color="textSecondary"
              gutterBottom
            >
              All scientific fields are served on this website: Philosophy,
              Mathematics, Geometry, Litterature, Engineering, Mechanics,
              Informatics, Theology, Medicine, Physics, Fine Arts, etc.
            </Typography>
          </div>
          <Box my={1}>
            <div className="textdefault">
              <Typography
                style={{
                  fontWeight: "500",
                  fontSize: "19.2px",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                }}
                color="textSecondary"
                gutterBottom
              >
                Ideal for researchers, collaborators, students, and writers.
              </Typography>
            </div>
          </Box>
        </Grid>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
