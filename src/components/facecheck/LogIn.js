import React, { useEffect } from "react";
import { Link as RouteLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

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
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const classes = useStyles();
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
  });

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const authenticate = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            pass,
          }),
        }
      ).then((response) => response.json());

      localStorage.setItem("token", response.token);

      history.push("/dashboard");
    } catch (e) {
      alert("User not found. Please try again!");
    }
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        authenticate();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.margin}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
      </div>
      <div className={classes.paper}>
        <Typography color="textSecondary" variant="h4">
          Sign In
        </Typography>
        <Typography color="secondary" variant="h6">
          Sign In on Unica
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onInput={handleEmailChange}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onInput={handlePassChange}
            autoComplete="current-password"
            error={Boolean(formik.touched.password && formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button
            fullWidth
            disabled={email === "" || pass === "" ? true : false}
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
            onClick={(e) => {
              authenticate();
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <RouteLink
                to="/"
                style={{ color: "#3f51b5", textDecoration: "none" }}
              >
                {"Go Back"}
              </RouteLink>
            </Grid>
            <Grid item>
              <RouteLink
                to="signup"
                style={{ color: "#3f51b5", textDecoration: "none" }}
              >
                Don&apos;t have an account? Sign Up
              </RouteLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
