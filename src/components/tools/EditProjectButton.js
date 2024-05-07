import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, makeStyles, AppBar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CreateIcon from "@material-ui/icons/Create";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";
import ComboBox from "./Category";

const useStyles = makeStyles({
  appBar: {
    position: "relative",
  },
});
export default function EditProjectButtonAPI(props) {
  const classes = useStyles();

  const { id } = props;

  useEffect(() => {
    fetch(`http://localhost:3000/api/projects/${id}`)
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

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [isPublic, setPublic] = React.useState(false);

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

  const handlePublicSwitch = () => {
    setPublic(isPublic ? false : true);
  };

  const updateProject = async () => {
    await fetch(`http://localhost:3000/api/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        public: isPublic ? "1" : "0",
      }),
    });

    props.fetchProjects();
  };

  return (
    <div>
      <Button
        style={{
          textTransform: "none",
          height: "22px",
          fontWeight: "400",
          fontSize: "1rem",
        }}
        type="submit"
        variant="text"
        color="primary"
        size="small"
        startIcon={<CreateIcon />}
        onClick={openModal}
      >
        {"Edit"}
      </Button>

      <Dialog fullWidth maxWidth="sm" open={open} onClose={closeModal}>
        <AppBar className={classes.appBar}>
          <DialogTitle>{"Edit project"}</DialogTitle>
        </AppBar>
        <Divider />
        <DialogContent>
          <DialogContentText variant="subtitle2">
            {
              "Here, you can edit your project preferences, such as it's title, the category or it's public state."
            }
          </DialogContentText>
          <TextField
            required
            id="title"
            label="Title"
            type="title"
            InputLabelProps={{ shrink: true }}
            defaultValue={title}
            variant="outlined"
            fullWidth
            onInput={(e) => {
              handleTitleChange(e);
            }}
            autoFocus
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
                  onChange={(e) => {
                    handlePublicSwitch(e);
                  }}
                />
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>{"Cancel"}</Button>
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
  projectTitle: PropTypes.string,
  id: PropTypes.node,
  title: PropTypes.string,
  category: PropTypes.string,
  isPublic: PropTypes.bool,
  fetchProjects: PropTypes.func.isRequired,
};
