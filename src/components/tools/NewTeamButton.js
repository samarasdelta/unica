import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles({
  Bgcolor: {
    backgroundColor: "#1565C0",
    color: "#ffffff",
  },
});

export default function NewTeamButtonAPI() {
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

    window.location.reload();
  };

  return (
    <div>
      <ListItem
        button
        type="submit"
        startIcon={<AddCircleIcon />}
        onClick={handleClickOpen}
      >
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
        <div className={classes.Bgcolor}>
          <DialogTitle>{"Create a new team"}</DialogTitle>{" "}
        </div>
        <DialogContent>
          <DialogContentText variant="subtitle2">
            {"Please, set a title for your team."}
          </DialogContentText>
          <Box>
            <TextField
              margin="dense"
              id="title"
              label="Team's name"
              type="title"
              multiline
              rows={1}
              variant="outlined"
              fullWidth
              onInput={handleTitleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="disabled">
            {"Cancel"}
          </Button>
          <Button onClick={createGroup} color="primary">
            {"Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
