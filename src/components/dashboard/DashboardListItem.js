import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditProjectButtonAPI from "../tools/EditProjectButton";
import Moment from "react-moment";

const useStyles = makeStyles({
  projectContext: {
    flex: 1,
  },
  boxSpace: {
    flex: 1,
  },
});
export default function DashboardListItem(props, { fetchProjects }) {
  const deleteProject = async (id) => {
    await fetch(`api/projects/${id}`, {
      method: "DELETE",
    });

    // fetchProjects();
    window.location.reload();
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxSpace}>
        <div>
          <Link href={`/project/${props.id}`}>
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
            <Moment format="DD/MM/YYYY - HH:mm">{props.dateCreated}</Moment>
          </Typography>
        </Box>
        <Box mt={1} style={{ padding: "0 20px", fontSize: "1rem" }}>
          <Link color="primary" href={`/project/${props.id}`}>
            {"View full project"}
          </Link>
        </Box>
        <Box mt={1} style={{ padding: "0 20px" }}>
          <EditProjectButtonAPI id={props.id} fetchProjects={fetchProjects} />
        </Box>
        <Box mt={1} style={{ padding: "0 20px" }}>
          <Link
            color="primary"
            onClick={() => {
              deleteProject(props.id);
            }}
          >
            <Tooltip arrow title="Delete project">
              <DeleteIcon
                style={{ cursor: "pointer", marginTop: "-2px" }}
                fontSize="medium"
              />
            </Tooltip>
          </Link>
        </Box>
      </Box>
    </React.Fragment>
  );
}

DashboardListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  dateCreated: PropTypes.string,
  projectState: PropTypes.number,
  projectIsDeleted: PropTypes.number,
  fetchProjects: PropTypes.func.isRequired,
};
