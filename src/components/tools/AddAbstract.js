import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, makeStyles, AppBar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  appBar: {
    position: "relative",
  },
});

export default function AddAbstract(props) {
  const classes = useStyles();
  const { id } = props;

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAbstract(data.projectAbstract);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [id]);

  const [open, setOpen] = React.useState(false);
  const [abstract, setAbstract] = React.useState("");

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleAbstractChange = (e) => {
    setAbstract(e.target.value);
  };

  const updateAbstract = async () => {
    await fetch(`/api/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        abstract,
      }),
    });

    // props.fetchProjects();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={openModal}
      >
        {"Abstract"}
      </Button>

      <Dialog fullWidth maxWidth="lg" open={open} onClose={closeModal}>
        <AppBar className={classes.appBar}>
          <DialogTitle>{"Abstract"}</DialogTitle>
        </AppBar>
        <Divider />
        <DialogContent>
          <DialogContentText variant="subtitle2">
            Here, you can add a summary for your project or edit it. The summary
            helps prospective collaborators better understand the purpose or the
            idea behind your project.
          </DialogContentText>
          <TextField
            multiline={true}
            minRows={20}
            id="title"
            label="Abstract"
            type="title"
            InputLabelProps={{ shrink: true }}
            defaultValue={abstract}
            variant="outlined"
            fullWidth
            onInput={(e) => {
              handleAbstractChange(e);
            }}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>{"Cancel"}</Button>
          <Button
            onClick={(e) => {
              updateAbstract(id);
              closeModal(false);
            }}
            color="primary"
          >
            {"Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AddAbstract.propTypes = {
  projectAbstract: PropTypes.string,
  id: PropTypes.node,
  abstract: PropTypes.string,
};
