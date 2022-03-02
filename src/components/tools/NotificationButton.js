import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Badge, IconButton, makeStyles } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "600px",
    "& > * + *": {
      marginRight: theme.spacing(1.2),
      marginTop: theme.spacing(6.6),
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

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        onClick={handleClick({ vertical: "top", horizontal: "right" })}
      >
        <Badge badgeContent={0} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="No notifications to show!"
        key={vertical + horizontal}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
