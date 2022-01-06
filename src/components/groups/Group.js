import React from "react";
import PropTypes from "prop-types";
import AppBarCustom from "../tools/AppBarCustom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 620,
  },
  content: {
    paddingLeft: "28px",
    padding: 0,
  },
}));

const Group = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBarCustom />
      <div>
        <header className="App-header">
          {`Team Title: ${props.group.groupTitle}`}
        </header>
      </div>
      <div>
        <Container maxWidth="xl">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Card className={classes.root}>
                <CardHeader title="Team's members" />
                <CardContent className={classes.content}>
                  <Typography variant="h5" color="textSecondary">
                    {"kwstas"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.root}>
                <CardHeader title="Team's projects" />
                <CardContent className={classes.content}>
                  <Typography variant="h5" color="textSecondary">
                    {"project 1"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.root}>
                <CardHeader title="Team owner" />
                <CardContent className={classes.content}>
                  <Typography variant="h5" color="textSecondary">
                    {"mpampis"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Group;

Group.propTypes = {
  id: PropTypes.string,
  group: PropTypes.shape({
    groupTitle: PropTypes.string,
  }),
};
