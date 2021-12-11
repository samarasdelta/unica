import React, { useState } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  Badge,
  Container,
  IconButton,
  Box,
  Switch,
  Typography,
  Link,
  Toolbar,
  AppBar,
  Drawer,
  List,
  CssBaseline,
  Grid,
  CardHeader,
  Divider,
  TextField,
  CardContent,
  Card,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import { blue, red } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HelpIcon from "@material-ui/icons/Help";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PublishIcon from "@material-ui/icons/Publish";
import {
  DiscoverListItems,
  dashboardListItems,
  mainListItems,
  GroupsListItems,
} from "../tools/ListItems";
import Logo from "../images/unicasmall1.png";
import MoreButton from "../tools/AccountProfileButton";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    overflow: "hidden",
    width: "auto",
  },
  toolbar: {
    paddingRight: 20, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 20,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7),
    },
  },
  container: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(2),
    maxWidth: "100vw",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 220,
  },
  Box: {
    paddingTop: 1,
    scrollPaddingBottom: 1,
  },
  Top: {
    paddingTop: "8 !important",
  },
}));

export default function AccountProfile() {
  const [open, setOpen] = React.useState(false);
  const [darkState, setDarkState] = useState(false);

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? blue[200] : blue[800];
  const mainSecondaryColor = darkState ? red[600] : red[500];
  const [fname, setFirstName] = React.useState("");
  const [sname, setSurName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [telephone, setTelephone] = React.useState("");

  const darkTheme = createMuiTheme({
    backgroundColor: "#212121",
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const classes = useStyles();
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleSurNameChange = (e) => {
    setSurName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleDobChange = (e) => {
    setDob(e.target.value);
  };
  const handleTelephoneChange = (e) => {
    setTelephone(e.target.value);
  };

  const createUser = async () => {
    await fetch("api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        sname,
        email,
        dob,
        telephone,
      }),
    });

    window.location.reload();
  };

  const UploadButton = () => (
    <Button
      style={{
        color: "red",
        fontWeight: "600",
        textTransform: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
      variant="contained"
      component="label"
      startIcon={<PublishIcon />}
    >
      {"Upload"}
      <input type="file" hidden />
    </Button>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {"Account"}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge color="secondary">
                <HelpIcon />
              </Badge>
            </IconButton>
            <MoreButton />
            <Switch checked={darkState} onChange={handleThemeChange} />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <Box pr={10}>
              <Link href={`/dashboard`}>
                <img src={Logo} alt="logo" />
              </Link>
            </Box>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <div className={classes.Top}>
            <List>{DiscoverListItems}</List>
            <List>{dashboardListItems}</List>
            <List>{mainListItems}</List>
            <List>
              <GroupsListItems />
            </List>
          </div>
        </Drawer>
        <Container className={classes.container}>
          <div autoComplete="off" noValidate>
            <Card>
              <CardHeader
                subheader="The information can be edited"
                title="Profile"
              />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Please specify the first name"
                      label="First name"
                      name="fname"
                      required
                      variant="outlined"
                      onInput={handleFirstNameChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Please specify the last name"
                      label="Last name"
                      name="sname"
                      required
                      variant="outlined"
                      onInput={handleSurNameChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      helperText="Please type your email adress"
                      name="email"
                      required
                      type="email"
                      variant="outlined"
                      onInput={handleEmailChange}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      type="number"
                      variant="outlined"
                      onInput={handleTelephoneChange}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <TextField
                      fullWidth
                      label="Date of Birth"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      name="dateofbirth"
                      required
                      variant="outlined"
                      onInput={handleDobChange}
                    />
                  </Grid>
                  <Grid item md={8} xs={12}>
                    {/* <input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                      /> */}
                    <TextField
                      disabled
                      defaultValue="pathname.pdf"
                      fullWidth
                      label="CV"
                      name="state"
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        endAdornment: <UploadButton />,
                      }}
                      variant="outlined"
                    >
                      Upload File
                    </TextField>
                  </Grid>
                </Grid>
              </CardContent>
              <Box>
                <Button
                  style={{
                    fontWeight: "600",
                    textTransform: "none",
                    marginBottom: "15px",
                    marginRight: "15px",
                    float: "right",
                  }}
                  color="primary"
                  variant="contained"
                  onClick={createUser}
                >
                  Save details
                </Button>
              </Box>
            </Card>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}
