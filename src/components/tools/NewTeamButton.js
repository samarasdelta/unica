import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import Divider from "@material-ui/core/Divider";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function NewTeamButtonAPI() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText secondary="New team" />
      </ListItem>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Create a new team
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText variant="subtitle2">
            Please, fill out a title and a location for your team{"."}
          </DialogContentText>
          <Box mb={4}>
            <TextField
              required
              margin="dense"
              id="title"
              label="Team name"
              type="title"
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="disabled">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
