import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  projectContext: {
    flex: 1,
  },
});

export default function ProjectListItem() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Project</Title>
      <Typography component="p" variant="h6">
        Title
      </Typography>
      <Typography color="textSecondary" className={classes.projectContext}>
        on date
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View full project
        </Link>
      </div>
    </React.Fragment>
  );
}