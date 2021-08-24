import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../tools/Title";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";

function preventDefault(event) {
  event.preventDefault();
}

const deleteProject = async (id) => {
  console.log(id, "id");
  await fetch(`api/projects/${id}`, {
    method: "DELETE",
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

export default function DashboardListItem(props) {
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
            <Title>{props.title}</Title>
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
              {"Public:"} {props.projectState}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex">
        <Box flexGrow={1} mt={1}>
          <Typography color="textSecondary">
            {"Last Modified:"} {props.dateCreated}
          </Typography>
        </Box>
        <Box mt={1}>
          <Link color="primary" href="#" onClick={preventDefault}>
            {"View full project"}
          </Link>
        </Box>
        <Box m={1}>{"|"}</Box>
        <Box mt={1}>
          <Link
            color="primary"
            href="#"
            onClick={() => {
              deleteProject(props.id);
            }}
          >
            <DeleteIcon fontSize="small" />
          </Link>
        </Box>
      </Box>
    </React.Fragment>
  );
}

DashboardListItem.propTypes = {
  id: PropTypes.node,
  title: PropTypes.node,
  category: PropTypes.node,
  dateCreated: PropTypes.node,
  projectState: PropTypes.node,
};
