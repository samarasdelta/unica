import React from "react";
import {
  Badge,
  IconButton,
  Snackbar,
  makeStyles,
  Link,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import HelpIcon from "@material-ui/icons/Help";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PositionedSnackbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <IconButton
        color="inherit"
        onClick={handleClick({ vertical: "top", horizontal: "center" })}
      >
        <Badge>
          <HelpIcon />
        </Badge>
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <div className={classes.root}>
          <Alert onClose={handleClose} severity="info">
            This website uses LaTeX as it's primary input on projects. You can
            learn LaTeX by clicking the link:
            <Link
              href="https://www.learnlatex.org/en/"
              target="_blank"
              style={{ color: "#fff" }}
            >
              {" Learn LaTeX.org"}
            </Link>
          </Alert>
        </div>
      </Snackbar>
    </div>
  );
}
