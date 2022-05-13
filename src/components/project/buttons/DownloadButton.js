import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

const DownloadButton = ({ link }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log("handleClick", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("handleClose");
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        disabled={link === "" ? true : false}
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Download
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>as .zip</MenuItem>
        <MenuItem onClick={handleClose}>as .tex</MenuItem>
        <MenuItem onClick={handleClose}>as PDF</MenuItem>
      </Menu>
    </div>
  );
};

export default DownloadButton;

DownloadButton.propTypes = {
  link: PropTypes.string.isRequired,
};
