import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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

export default function NewProjectButtonAPI() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        color="default"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        New Project
      </Button>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Create a new project
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            Please, fill out a title and a category for your project.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            label="Title"
            type="title"
            fullWidth
          />

          <div>
            <FormControl className={classes.formControl}>
              <InputLabel required id="demo-simple-select-label">
                Category
              </InputLabel>
              <Select
                //value={maxWidth}
                //onChange={handleMaxWidthChange}
                inputProps={{
                  name: "max-width",
                  id: "max-width",
                }}
              >
                <MenuItem value="Other">Other</MenuItem>
                <MenuItem value="Medicin">Medicin</MenuItem>
                <MenuItem value="Physics">Physics</MenuItem>
                <MenuItem value="Geometry">Geometry</MenuItem>
                <MenuItem value="Mecanics">Mecanics</MenuItem>
                <MenuItem value="Theology">Theology</MenuItem>
                <MenuItem value="Philosophy">Philosophy</MenuItem>
                <MenuItem value="Engineering">Engineering</MenuItem>
                <MenuItem value="Informatics">Informatics</MenuItem>
                <MenuItem value="Litterature">Litterature</MenuItem>
                <MenuItem value="Mathematics">Mathematics</MenuItem>
                <MenuItem value="Fine Art's">Fine Art&apos;s</MenuItem>
              </Select>
            </FormControl>
          </div>
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
