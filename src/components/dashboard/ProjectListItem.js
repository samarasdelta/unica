import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../tools/Title";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  projectContext: {
    flex: 1,
  },
  boxSpace: {
    flex: 1,
  },
});

export default function ProjectListItem(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxSpace}>
        <Title>{props.title}</Title>
      </Box>
      <Box className={classes.boxSpace}>
        <Typography variant="h6">{props.category}</Typography>
      </Box>
      <Box className={classes.boxSpace}>
        <Typography color="textSecondary">
          Public: {props.projectState}
        </Typography>
      </Box>
      <Box className={classes.boxSpace}>
        <Typography color="textSecondary">
          Last Modified: {props.dateCreated}
        </Typography>
      </Box>
      <Box display="flex">
        <Box flexGrow={1} mt={1}>
          <Link color="primary" href="#" onClick={preventDefault}>
            View full project
          </Link>
        </Box>
        <Box>
          <FormControl>
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Public"
              color="textSecondary"
              labelPlacement="start"
            />
          </FormControl>
        </Box>
      </Box>
    </React.Fragment>
  );
}

ProjectListItem.propTypes = {
  title: PropTypes.node,
  category: PropTypes.node,
  dateCreated: PropTypes.node,
  projectState: PropTypes.node,
};
