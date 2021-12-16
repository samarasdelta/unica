import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CreateIcon from "@material-ui/icons/Create";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";
import ComboBox from "./Category";

const useStyles = makeStyles({
  Bgcolor: {
    backgroundColor: "#1565C0",
    color: "#ffffff",
  },
});

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

export default function EditProjectButtonAPI(props, { fetchProjects }) {
  const { id } = props;

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.projectTitle);
        setCategory(data.projectCategory);
        setPublic(data.projectState);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [id]);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [isPublic, setPublic] = React.useState("");

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategory = (category) => {
    setCategory(category);
  };

  // const handlePublicSwitch = (e) => {
  //   setPublic(e.target.checked);
  // };

  const updateProject = async () => {
    await fetch(`/api/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        // public: isPublic ? true : false,
      }),
    });

    window.location.reload();
    // fetchProjects();
  };

  return (
    <div>
      <Button
        style={{ textTransform: "none", height: "22px" }}
        type="submit"
        variant="text"
        color="primary"
        size="small"
        startIcon={<CreateIcon />}
        onClick={openModal}
      >
        {"Edit Project"}
      </Button>

      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={closeModal}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <div className={classes.Bgcolor}>
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            {"Edit project"}
          </DialogTitle>
        </div>
        <Divider />
        <DialogContent>
          <DialogContentText variant="subtitle2">
            {
              "Here, you can edit your project preferences, such as it's title, the category or it's public state."
            }
          </DialogContentText>
          <TextField
            required
            margin="dense"
            id="title"
            label="Title"
            type="title"
            InputLabelProps={{ shrink: true }}
            defaultValue={title}
            multiline
            rows={2}
            variant="outlined"
            fullWidth
            onInput={(e) => {
              handleTitleChange(e);
            }}
          />

          <Box display="flex" mt={2}>
            <Box flexGrow={1}>
              <ComboBox
                defaultValue={category}
                onSelect={(category) => {
                  handleCategory(category);
                }}
              />
            </Box>
            <Box mt={1} pr={3}>
              <FormControl>
                <FormControlLabel
                  control={<Switch color="primary" />}
                  label="Public"
                  checked={isPublic}
                  labelPlacement="start"
                  // onChange={(e) => {
                  //   handlePublicSwitch(e);
                  //   console.log("public state", isPublic);
                  // }}
                />
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeModal}>
            {"Cancel"}
          </Button>
          <Button
            onClick={(e) => {
              updateProject(id);
              closeModal(false);
            }}
            color="primary"
          >
            {"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

EditProjectButtonAPI.propTypes = {
  id: PropTypes.node,
  title: PropTypes.string,
  category: PropTypes.string,
  isPublic: PropTypes.bool,
};
