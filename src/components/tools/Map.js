import React from "react";
import {
  CssBaseline,
  makeStyles,
  Grid,
  Container,
  Box,
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
    borderTop: `2px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(2),
  },
}));

const footers = [
  /* Dummy data */
  {
    title: "@ researchers:",
    description: [
      "Event organizers of any type, such as festivals, forums, conferences, corporate events and trade shows.",
    ],
  },
  {
    title: "@ work:",
    description: [
      "Management teams, HR, Marketing, CRM, Sales, Logistics, and other departments in your organization have now the power to engage your employees in different ways.",
    ],
  },
  {
    title: "@ students:",
    description: [
      "Speakers, teachers, professors, instructors, lecturers, students, facillitators.",
    ],
  },
  {
    title: "@ market research:",
    description: [
      "Market researchers, focus groups, companies, and anyone who would like to collect responses from their audiences.",
    ],
  },
];

export default function Map() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      {/* End hero unit */}
      {/* Footer */}
      <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="maptitle">
            <b>Why use UNICA?</b>
          </div>
          <div className="textdefault">
            All in one. You have the power of many solutions in one platform.
          </div>
          <div className="textdefault">
            Valuable engagement tools for less money. The best price in the
            market, perfect if you dont want to derail from your budget!
          </div>
          <Box my={1}>
            <div className="textdefault">
              Ideal for events, workplace, presentations and market research.
            </div>
          </Box>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Box my={2}>
            <div className="maptitle">
              <b>Who can use it?</b>
            </div>
          </Box>
        </Grid>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={12} sm={12} md={3} key={footer.title}>
              <div className="maptitleuse">{footer.title}</div>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <div className="textdefault">{item}</div>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Box mt={4}>
            <div className="maptitleuse">
              <b>How to motivate and engage your participants?</b>
            </div>
          </Box>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="textdefault">
            With a big array of tools, from anonymity to registration, you let
            your people express their deeper thoughts, ideas and concerns,
            quickly and effectively.
          </div>
        </Grid>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
