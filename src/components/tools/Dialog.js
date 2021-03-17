import React from "react";
import { Link as RouteLink } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import AddIcon from "@material-ui/icons/Add";
import { blue } from "@material-ui/core/colors";
import SettingsIcon from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle>
        <Typography variant="disabled" align="center">
          Dialog Title
        </Typography>
      </DialogTitle>
      <Divider />
      <List>
        <ListItem
          align="center"
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemText primary="Item w/o icon button" />
        </ListItem>
        <ListItem autoFocus button>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <SettingsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Dialog Item 1" />
        </ListItem>

        <ListItem
          align="center"
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Dialog Item 2" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        component={RouteLink}
        //to=""
        type="submit"
        variant="contained"
        color="default"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        ?
      </Button>

      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
