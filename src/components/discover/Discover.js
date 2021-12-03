import React, { useState } from "react";
import { Link as RouteLink } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  Button,
  Badge,
  Container,
  Divider,
  Box,
  Switch,
  Link,
  Typography,
  Toolbar,
  AppBar,
  Drawer,
  List,
  CssBaseline,
} from "@material-ui/core";
import clsx from "clsx";
import { blue, red } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import PublishIcon from "@material-ui/icons/Publish";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HelpIcon from "@material-ui/icons/Help";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  DiscoverListItems,
  dashboardListItems,
  mainListItems,
  GroupsListItems,
} from "../tools/ListItems";
import Logo from "../images/unicasmall1.png";
import SearchBar from "../tools/SearchBar";
import DiscoverResults from "./DiscoverListItem";
import MoreButton from "../tools/AccountProfileButton";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
    flex: "1 1 100%",
  },
  section2: {
    margin: theme.spacing(2, 0, 3),
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
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Discover() {
  const [open, setOpen] = React.useState(true);
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? blue[200] : blue[800];
  const mainSecondaryColor = darkState ? red[600] : red[500];
  const darkTheme = createMuiTheme({
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
              {"Discover"}
            </Typography>
            <SearchBar />
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
          <List>{DiscoverListItems}</List>
          <List>{dashboardListItems}</List>
          <List>{mainListItems}</List>
          <List>
            <GroupsListItems />
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.container} maxWidth="xl">
            <Typography variant="h6">
              {"Available for collaboration projects"}
            </Typography>
            <Typography variant="h7" color="textSecondary">
              {
                "Here, you will find a list with the available projects to collaborate with other users"
              }
            </Typography>
            <Divider className={classes.section2} />
            <DiscoverResults />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
            >
              <Box>
                <Button
                  component={RouteLink}
                  //to=""
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<PublishIcon />}
                  className={classes.submit}
                >
                  Button 1
                </Button>
              </Box>
              <Box m={1}>
                <Button
                  component={RouteLink}
                  //to=""
                  type="submit"
                  variant="contained"
                  color="default"
                  startIcon={<AddIcon />}
                  className={classes.submit}
                >
                  Button 2
                </Button>
              </Box>
            </div>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}
