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
  discoverListItems,
  dashboardListItems,
  mainListItems,
  GroupsListItems,
} from "../tools/ListItems";
import Logo from "../images/unicasmall1.png";
import MyToolbar from "../tools/AccountDrawer";
import SimpleDialog from "../tools/Dialog";

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
  appBarSpacer: theme.mixins.toolbar,
  content: {
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
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
  const [open, setOpen] = React.useState(true);
  const [darkState, setDarkState] = useState(false);

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? blue[200] : blue[800];
  const mainSecondaryColor = darkState ? red[600] : red[500];
  const [fname, setFirstName] = React.useState("");
  const [sname, setSurName] = React.useState("");
  const [email, setEmail] = React.useState("");

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
      }),
    });

    window.location.reload();
  };

  const UploadButton = () => (
    <Button>
      <input type="file" hidden />
      <PublishIcon />
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
            <MyToolbar />
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
              <img src={Logo} alt="logo" />
            </Box>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <div className={classes.Top}>
            <List>{discoverListItems}</List>
            <List>{dashboardListItems}</List>
            <List>{mainListItems}</List>
            <List>
              <GroupsListItems />
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.container}>
            <div>
              <Box>
                <SimpleDialog />
              </Box>
            </div>
            <Grid justifyContent="center" alignItems="center">
              <form autoComplete="off" noValidate>
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
                          name="email"
                          required
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
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Date of Birth"
                          type="date"
                          InputLabelProps={{ shrink: true }}
                          name="dateofbirth"
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                        />
                        <TextField
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
              </form>
            </Grid>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}
