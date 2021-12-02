import React from "react";
import { Grid, makeStyles, Box } from "@material-ui/core";
import "../tools/css.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(10),
  },
}));

export default function PrivacyFirst() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.margin}>
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="titleintro">
            <b>{"Privacy Policy"}</b>
          </div>
        </Grid>
      </div>
      <Box m={2}>
        <div className="termstext">
          {[...new Array(48)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </div>
      </Box>
    </div>
  );
}
