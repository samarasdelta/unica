import React from "react";
import { Button } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const SaveButton = ({ saveProject, text }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={() => {
          handleClick();
          saveProject();
        }}
        disabled={text === "" ? true : false}
        variant="contained"
        color="primary"
      >
        Save
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Code saved successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SaveButton;

SaveButton.propTypes = {
  saveProject: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
