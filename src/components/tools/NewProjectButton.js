import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Divider,
  Switch,
  Box,
} from "@material-ui/core";
import PropTypes from "prop-types";
import ComboBox from "./Category";
import TemplateBox from "./Template";
import AddIcon from "@material-ui/icons/Add";

export default function NewProjectButtonAPI({ fetchProjects }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [isPublic, setPublic] = React.useState(false);

  const handleClickOpen = () => {
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

  const handlePublicSwitch = (e) => {
    setPublic(e.target.checked);
  };

  const createProject = async () => {
    await fetch("api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        public: isPublic ? true : false,
      }),
    });

    fetchProjects();
  };

  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        {"Create"}
      </Button>
      <Dialog
        fullWidth
        maxWidth="sm"
        color="primary"
        open={open}
        onClose={closeModal}
      >
        <div>
          <DialogTitle>{"Create new project"}</DialogTitle>
        </div>
        <Divider />
        <DialogContent>
          <DialogContentText variant="subtitle2">
            {
              "Please, fill out a title and a category for your project. Also, you can set your public state preference."
            }
          </DialogContentText>
          <TextField
            required
            id="title"
            label="Title"
            type="title"
            variant="outlined"
            fullWidth
            onInput={handleTitleChange}
            autoFocus
          />
          <Box mt={2}>
            <Box flexGrow={1}>
              <TemplateBox
                onSelect={(category) => {
                  handleCategory(category);
                }}
              />
            </Box>
          </Box>
          <Box display="flex" mt={2}>
            <Box flexGrow={1}>
              <ComboBox
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
                  labelPlacement="start"
                  onChange={handlePublicSwitch}
                />
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>{"Cancel"}</Button>
          <Button
            disabled={title === "" || category === "" ? true : false}
            onClick={(e) => {
              createProject();
              closeModal(false);
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

NewProjectButtonAPI.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
};
