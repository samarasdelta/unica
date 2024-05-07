import React from "react";
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
import * as Yup from "yup";
import { useFormik } from "formik";

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

export default function SignUp() {
  const classes = useStyles();
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      firstName: Yup.string().max(255).required("First name is required"),
      lastName: Yup.string().max(255).required("Last name is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
  });

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [fname, setFirstName] = React.useState("");
  const [sname, setSecondName] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleSecondNameChange = (e) => {
    setSecondName(e.target.value);
  };

  const register = async () => {
    try {
      await fetch(`http://localhost:3000/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          pass,
          fname,
          sname,
        }),
      });

      history.push("/login");
    } catch (e) {
      alert("Your information is not correct. Please try again!");
    }
  };

  // useEffect(() => {
  //   const listener = (event) => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       event.preventDefault();
  //       register();
  //     }
  //   };
  //   document.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // });

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
          Create a new account
        </Typography>
        <Typography color="secondary" variant="h6">
          Use your email to create a new account
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                label="Email Address"
                onInput={handleEmailChange}
                value={formik.values.email}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="firstName"
                id="firstName"
                onInput={handleFirstNameChange}
                error={Boolean(
                  formik.touched.firstName && formik.errors.firstName
                )}
                fullWidth
                helperText={formik.touched.firstName && formik.errors.firstName}
                label="First Name"
                name="firstName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                onInput={handleSecondNameChange}
                error={Boolean(
                  formik.touched.lastName && formik.errors.lastName
                )}
                helperText={formik.touched.lastName && formik.errors.lastName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                helperText={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onInput={handlePassChange}
              />
            </Grid>
          </Grid>
          <Button
            // disabled={formik.isSubmitting}
            disabled={
              email === "" || pass === "" || fname === "" || sname === ""
                ? true
                : false
            }
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
            onClick={(e) => {
              register();
            }}
          >
            {"Sign up"}
          </Button>
        </form>
        <Grid container justifyContent="flex-end">
          <Grid item xs>
            <RouteLink
              to="/"
              style={{ color: "#3f51b5", textDecoration: "none" }}
            >
              {"Go back"}
            </RouteLink>
          </Grid>
          <Grid item>
            <RouteLink
              to="login"
              style={{ color: "#3f51b5", textDecoration: "none" }}
            >
              Already have an account? Sign In
            </RouteLink>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
