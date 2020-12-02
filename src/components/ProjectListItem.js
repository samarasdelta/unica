import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  projectContext: {
    flex: 1,
  },
});

export default function ProjectListItem(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box>
        <Title>{props.title}</Title>
      </Box>
      <Box my={2}>
        <Typography variant="h6">{props.category}</Typography>
      </Box>
      <Box pt={1}>
        <Typography color="textSecondary" className={classes.projectContext}>
          Last Modified: {props.dateCreated}
        </Typography>
      </Box>
      <div>
        <Box>
          <Link color="primary" href="#" onClick={preventDefault}>
            View full project
          </Link>
        </Box>
      </div>
    </React.Fragment>
  );
}

ProjectListItem.propTypes = {
  title: PropTypes.node,
  category: PropTypes.node,
  dateCreated: PropTypes.node,
};
