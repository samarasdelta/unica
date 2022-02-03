import React from "react";
import {
  makeStyles,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

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
      <IconButton onClick={handleClickOpen} color="primary">
        <PersonAddIcon />
      </IconButton>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <div className={classes.Bgcolor}>
          <DialogTitle>{"Add user"}</DialogTitle>{" "}
        </div>
        <DialogContent>
          <DialogContentText variant="subtitle2">
            {"Please, add user by giving an email."}
          </DialogContentText>
          <Box>
            <TextField
              autoFocus
              required
              id="email"
              label="Email address"
              type="email"
              name="email"
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
