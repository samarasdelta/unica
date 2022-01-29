import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Badge, IconButton, makeStyles } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "600px",
    "& > * + *": {
      marginTop: theme.spacing(-2),
    },
  },
}));

export default function PositionedSnackbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
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
        onClick={handleClick({ vertical: "top", horizontal: "right" })}
      >
        <Badge badgeContent={0} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className={classes.root}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="No notifications to show!"
        key={vertical + horizontal}
      />
    </div>
  );
}
