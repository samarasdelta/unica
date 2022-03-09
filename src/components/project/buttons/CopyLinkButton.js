import React from "react";
import { Button } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const CopyLinkButton = ({ link }) => {
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
        disabled={link === "" ? true : false}
        onClick={() => {
          handleClick();
          navigator.clipboard.writeText(link);
        }}
        variant="contained"
        color="primary"
      >
        Share PDF
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
          PDF link copied successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CopyLinkButton;

CopyLinkButton.propTypes = {
  link: PropTypes.func.isRequired,
};
