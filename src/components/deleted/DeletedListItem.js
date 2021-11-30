import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../tools/Title";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Moment from "react-moment";

// function preventDefault(event) {
//   event.preventDefault();
// }

const deletePermaProject = async (id) => {
  await fetch(`api/projects/${id}`, {
    method: "DELETE",
  });

  window.location.reload();
};

const restoreProject = async (id) => {
  await fetch(`api/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isDeleted: "0",
    }),
  });

  window.location.reload();
};

const useStyles = makeStyles({
  projectContext: {
    //flex: 1,
  },
  boxSpace: {
    flex: 1,
  },

  customWidth: {
    maxWidth: "none",
  },
});

export default function DeleteListItem(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxSpace}>
        <Tooltip
          classes={{ tooltip: classes.customWidth }}
          title={props.title}
          placement="bottom"
          arrow
          interactive
          enterDelay={1000}
          leaveDelay={500}
        >
          <div>
            <Link href={`/project/${props.id}`}>
              <Title>{props.title}</Title>
            </Link>
          </div>
        </Tooltip>
      </Box>

      <Box display="flex" className={classes.boxSpace}>
        <Typography variant="h6">
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
        <Box mt={1}>
          <Link color="primary" href={`/project/${props.id}`}>
            {"View full project "}
          </Link>
        </Box>
        <Box m={1}>{"|"}</Box>
        <Box mt={1}>
          <Link
            color="primary"
            href="#"
            onClick={() => {
              restoreProject(props.id);
            }}
          >
            {"Restore project "}
          </Link>
        </Box>
        <Box m={1}>{"|"}</Box>
        <Box mt={1}>
          <Link
            color="primary"
            href="#"
            onClick={() => {
              deletePermaProject(props.id);
            }}
          >
            <Tooltip arrow title="Permanent deletion project">
              <DeleteForeverIcon fontSize="small" />
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
};
