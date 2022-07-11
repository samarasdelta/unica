import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { OpenInNew } from "@material-ui/icons";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const ShareButton = ({ pdfLink, openButton }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        startIcon={<OpenInNew />}
        disabled={pdfLink === "" ? true : false}
        onClick={() => {
          openButton();
          window.open(`${pdfLink}`, "_blank");
        }}
        variant="contained"
        color="primary"
      >
        Open
      </Button>
    </div>
  );
};

export default ShareButton;

ShareButton.propTypes = {
  link: PropTypes.string.isRequired,
  pdfLink: PropTypes.string.isRequired,
  openButton: PropTypes.func.isRequired,
};
