import React from "react";
import { Link as RouteLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  margin: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "red",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ForgotEmail() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.margin}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
      </div>
      <div className={classes.paper}>
        <Typography color="textSecondary" component="h1" variant="h5">
          Email recovery
        </Typography>
        <Typography color="secondary" variant="h6">
          Use your phone number to recover your email adress
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phonenumber"
            label="Phone Number"
            name="phonenumber"
            autoComplete="phonenumber"
          />
          <Button
            component={RouteLink}
            to="/"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{
              fontWeight: "400",
              color: "white",
              textTransform: "none",
              fontSize: "1rem",
              borderRadius: "4px",
            }}
          >
            Next
          </Button>
          <div align="right">
            <RouteLink
              to="forgotpass"
              style={{
                color: "#3f51b5",
                textDecoration: "none",
                textAlign: "end",
              }}
            >
              Go back
            </RouteLink>
          </div>
        </form>
      </div>
    </Container>
  );
}
