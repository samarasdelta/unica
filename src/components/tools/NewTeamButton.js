import React from "react";
import { makeStyles, AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  appBar: {
    position: "relative",
  },
});

export default function NewTeamButtonAPI({ fetchGroups }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const createGroup = async () => {
    await fetch("api/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });

    fetchGroups();
  };

  return (
    <div>
      <ListItem button type="submit" onClick={handleClickOpen}>
        <ListItemIcon>
          <AddCircleIcon style={{ color: "green" }} />
        </ListItemIcon>
        <ListItemText secondary="New team" />
      </ListItem>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <AppBar className={classes.appBar}>
          <DialogTitle>{"Create new team"}</DialogTitle>
        </AppBar>
        <DialogContent>
          <DialogContentText variant="subtitle2">
            {"Please, set a title for your team."}
          </DialogContentText>
          <Box>
            <TextField
              autoFocus
              required
              id="title"
              label="Team's name"
              type="title"
              variant="outlined"
              fullWidth
              onInput={handleTitleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{"Cancel"}</Button>
          <Button
            disabled={title === "" ? true : false}
            onClick={() => {
              createGroup();
              handleClose();
            }}
            color="primary"
          >
            {"Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

NewTeamButtonAPI.propTypes = {
  fetchGroups: PropTypes.func.isRequired,
};
