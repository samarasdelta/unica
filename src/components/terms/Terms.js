import React from "react";
import { Grid, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(10),
  },
}));

export default function TermsFirst() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.margin}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div className="titleintro">
            <b>{"Terms of Service"}</b>
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
