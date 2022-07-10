import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import { GetApp } from "@material-ui/icons";

const DownloadButton = ({ linked, downloadPdf, downloadTex }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        startIcon={<GetApp />}
        disabled={linked === "" ? true : false}
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
        <MenuItem
          onClick={() => {
            handleClose();
            downloadTex();
          }}
        >
          as .tex
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            downloadPdf();
          }}
        >
          as .pdf
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DownloadButton;

DownloadButton.propTypes = {
  linked: PropTypes.string.isRequired,
  downloadPdf: PropTypes.func.isRequired,
  downloadTex: PropTypes.func.isRequired,
};
