import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import RestoreIcon from "@material-ui/icons/Restore";
import Moment from "react-moment";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  projectContext: {
    flex: 1,
  },
  boxSpace: {
    flex: 1,
  },
});

export default function DeleteListItem(props) {
  const classes = useStyles();

  const deletePermaProject = async (id) => {
    await fetch(`${process.env.REACT_APP_API_URL}/api/projects/${id}`, {
      method: "DELETE",
    });

    props.fetchDeletedProjects();
  };

  const restoreProject = async (id) => {
    await fetch(`${process.env.REACT_APP_API_URL}/api/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isDeleted: "0",
      }),
    });

    props.fetchDeletedProjects();
  };

  return (
    <React.Fragment>
      <Box className={classes.boxSpace}>
        <div>
          <Link>
            <Typography noWrap variant="h5" style={{ fontWeight: "500" }}>
              {props.title}
            </Typography>
          </Link>
        </div>
      </Box>

      <Box display="flex" className={classes.boxSpace}>
        <Typography variant="h6" style={{ fontWeight: "400" }}>
          {"Category:"} {props.category}
        </Typography>
      </Box>
      <Box display="flex">
        <Box flexGrow={1}>
          <Box mt={1}>
            <Typography color="textSecondary">
              {"Public: "} {props.projectState ? "On" : "Off"}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex">
        <Box flexGrow={1} mt={1}>
          <Typography color="textSecondary">
            {"Last Modified: "}
            <Moment format="DD/MM/YYYY - HH:MM">{props.dateCreated}</Moment>
          </Typography>
        </Box>

        <Box mt={1} style={{ padding: "0 20px", fontSize: "1rem" }}>
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
            startIcon={<RestoreIcon />}
            onClick={() => {
              restoreProject(props.id);
            }}
          >
            {"Restore"}
          </Button>
        </Box>
        <Box mt={1} style={{ padding: "0 20px" }}>
          <Link
            color="primary"
            onClick={() => {
              deletePermaProject(props.id);
            }}
          >
            <Tooltip arrow title="Permanent deletion project">
              <DeleteForeverIcon
                fontSize="medium"
                style={{ cursor: "pointer", marginTop: "-2px" }}
              />
            </Tooltip>
          </Link>
        </Box>
      </Box>
    </React.Fragment>
  );
}

DeleteListItem.propTypes = {
  id: PropTypes.node,
  title: PropTypes.node,
  category: PropTypes.node,
  dateCreated: PropTypes.node,
  projectState: PropTypes.node,
  projectIsDeleted: PropTypes.node,
  fetchDeletedProjects: PropTypes.func.isRequired,
};
