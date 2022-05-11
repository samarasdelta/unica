import React, { useContext } from "react";
import {
  makeStyles,
  Container,
  IconButton,
  Box,
  Typography,
  Link,
  Toolbar,
  AppBar,
  Drawer,
  List,
  Grid,
  CardHeader,
  withStyles,
  Divider,
  TextField,
  CardContent,
  Card,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import SwitchUI from "@material-ui/core/Switch";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import PublishIcon from "@material-ui/icons/Publish";
import {
  DiscoverListItems,
  dashboardListItems,
  mainListItems,
  GroupsListItems,
} from "../tools/ListItems";
import Logo from "../images/unicasmall1.png";
import MoreButton from "../tools/AccountProfileButton";
import { CustomThemeContext } from "../tools/themes/CustomThemeProvider";
import NotificationButton from "../tools/NotificationButton";
import HelpButton from "../tools/HelpButton";

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

const CustomSwitch = withStyles({
  switchBase: {
    color: "#ffffff",
    "&$checked": {
      color: "#131A20",
    },
    "&$checked + $track": {
      backgroundColor: "#131A20",
    },
  },
  checked: {},
  track: {},
})(SwitchUI);

export default function AccountProfile(users) {
  const [open, setOpen] = React.useState(false);

  console.log("users: ", users);

  // const [fname, setFirstName] = React.useState("");
  // const [sname, setSurName] = React.useState("");
  // const [email, setEmail] = React.useState("");

  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const isDark = Boolean(currentTheme === "dark");

  const handleThemeChange = (event) => {
    const { checked } = event.target;
    setTheme(checked ? "dark" : "normal");
  };

  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const handleFirstNameChange = (e) => {
  //   setFirstName(e.target.value);
  // };
  // const handleSurNameChange = (e) => {
  //   setSurName(e.target.value);
  // };
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const UploadButton = () => (
  //   <Button
  //     style={{
  //       color: "red",
  //       fontWeight: "600",
  //       textTransform: "none",
  //       backgroundColor: "transparent",
  //       boxShadow: "none",
  //     }}
  //     variant="contained"
  //     component="label"
  //     startIcon={<PublishIcon />}
  //   >
  //     {"Upload"}
  //     <input type="file" hidden />
  //   </Button>
  // );

  return (
    <div className={classes.root}>
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
          <NotificationButton />
          <HelpButton />
          <MoreButton />
          <CustomSwitch checked={isDark} onChange={handleThemeChange} />
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
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="First name"
                    name="fname"
                    variant="outlined"
                    // onInput={handleFirstNameChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Last name"
                    name="sname"
                    variant="outlined"
                    // onInput={handleSurNameChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email address"
                    name="email"
                    type="email"
                    variant="outlined"
                    // onInput={handleEmailChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                {/* 
                <Grid item md={8} xs={12}>
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
                </Grid> */}
              </Grid>
            </CardContent>
            <Divider />

            <Box>
              <Button
                style={{
                  fontWeight: "400",
                  textTransform: "none",
                  marginBottom: "15px",
                  marginRight: "15px",
                  float: "right",
                }}
                color="primary"
                variant="contained"
                // onClick={updateUser}
              >
                Save details
              </Button>
            </Box>
          </Card>
        </div>
      </Container>
    </div>
  );
}
