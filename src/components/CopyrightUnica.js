import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function CopyrightUnica() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
          UNICA
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }