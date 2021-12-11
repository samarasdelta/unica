import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../tools/Title";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditProjectButtonAPI from "../tools/EditProjectButton";
import Moment from "react-moment";

const deleteProject = async (id) => {
  await fetch(`api/projects/${id}`, {
    method: "DELETE",
  });

  window.location.reload();
};

// const getProjectId = async (id) => {
//   await fetch(`api/projects/${id}`, {
//     method: "GET",
//   });

//   window.location.reload();
// };

const useStyles = makeStyles({
  projectContext: {
    //flex: 1,
  },
  boxSpace: {
    flex: 1,
  },
});

export default function DashboardListItem(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxSpace}>
        <div>
          <Link href={`/project/${props.id}`}>
            <Title style={{ maxWidth: "25px" }}>{props.title}</Title>
          </Link>
        </div>
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
        <Box mt={1} style={{ padding: "0 20px" }}>
          <Link color="primary" href={`/project/${props.id}`}>
            {"View full project"}
          </Link>
        </Box>
        <Box m={1}>{"|"}</Box>
        <Box mt={1} style={{ padding: "0 20px" }}>
          <EditProjectButtonAPI id={props.id} />
        </Box>
        <Box m={1}>{"|"}</Box>
        <Box mt={1} style={{ padding: "0 20px" }}>
          <Link
            color="primary"
            href="#"
            onClick={() => {
              deleteProject(props.id);
            }}
          >
            <Tooltip arrow title="Delete project">
              <DeleteIcon fontSize="small" />
            </Tooltip>
          </Link>
        </Box>
      </Box>
    </React.Fragment>
  );
}

DashboardListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  dateCreated: PropTypes.string,
  projectState: PropTypes.string,
  projectIsDeleted: PropTypes.string,
};
