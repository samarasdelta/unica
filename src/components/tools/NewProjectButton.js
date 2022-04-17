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
  AppBar,
  Box,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Category from "./Category";
import TemplateBox from "./Template";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  appBar: {
    position: "relative",
  },
});
export default function NewProjectButtonAPI({ fetchProjects }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  // const [template, setTemplate] = React.useState("");
  const [isPublic, setPublic] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const initialState = [{ title: null, category: null, isPublic: null }];

  const closeModal = () => {
    setOpen(false);
    setTitle("");
    setCategory("");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // const handleTemplate = (template) => {
  //   setTemplate(template);
  // };

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
        color="inherit"
        open={open}
        onClose={closeModal}
      >
        <AppBar className={classes.appBar}>
          <DialogTitle color="inherit">{"Create new project"}</DialogTitle>
        </AppBar>
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
            defaultValue={initialState.title}
            onInput={handleTitleChange}
            autoFocus
          />
          <Box mt={2}>
            <Box flexGrow={1}>
              <TemplateBox
                // onSelect={(template) => {
                //   handleTemplate(template);
                // }}
                onSelect={(category) => {
                  handleCategory(category);
                }}
              />
            </Box>
          </Box>
          <Box display="flex" mt={2}>
            <Box flexGrow={1}>
              <Category
                defaultValue={initialState.category}
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
