import React, { useContext } from "react";
import {
  makeStyles,
  Container,
  Divider,
  Box,
  Link,
  Typography,
  withStyles,
  Toolbar,
  AppBar,
  Drawer,
  List,
} from "@material-ui/core";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SwitchUI from "@material-ui/core/Switch";
import {
  DiscoverListItems,
  dashboardListItems,
  mainListItems,
  // GroupsListItems,
} from "../tools/ListItems";
import Logo from "../images/unicasmall1.png";
// import DiscoverResults from "./DiscoverListItem";
import DiscoverMaterialTable from "./DiscoverMaterialTable";
import MoreButton from "../tools/AccountProfileButton";
import { CustomThemeContext } from "../tools/themes/CustomThemeProvider";
import NotificationButton from "../tools/NotificationButton";
import HelpButton from "../tools/HelpButton";

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

export default function Discover() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const isDark = Boolean(currentTheme === "dark");

  const handleThemeChange = (event) => {
    const { checked } = event.target;
    setTheme(checked ? "dark" : "normal");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

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
            {"Discover"}
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
        <List>{DiscoverListItems}</List>
        <List>{dashboardListItems}</List>
        <List>{mainListItems}</List>
        {/* <List>
          <GroupsListItems />
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container} maxWidth="xl">
          <Typography variant="h5" color="textSecondary">
            {"Available for collaboration projects"}
          </Typography>
          <Typography style={{ fontSize: "16px" }} color="textSecondary">
            {
              "Here, you will find a list of the available projects to collaborate with other users."
            }
          </Typography>
          <Divider className={classes.section2} />
          {/* <DiscoverResults /> */}
          <DiscoverMaterialTable />
        </Container>
      </main>
    </div>
  );
}
