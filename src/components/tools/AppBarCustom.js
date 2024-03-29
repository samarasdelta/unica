import React, { useContext } from "react";
import {
  // createTheme,
  // ThemeProvider,
  makeStyles,
  IconButton,
  Typography,
  withStyles,
  Toolbar,
  AppBar,
  Box,
  Link,
} from "@material-ui/core";
import clsx from "clsx";
// import { blue, red } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import SwitchUI from "@material-ui/core/Switch";
import MoreButton from "./AccountProfileButton";
import LogoUnica from "./images/unicasmall256.png";
import { CustomThemeContext } from "./themes/CustomThemeProvider";
import NotificationButton from "./NotificationButton";
import HelpButton from "./HelpButton";

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

const AppBarCustom = () => {
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

  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar className={classes.toolbar}>
          <Link href="/dashboard" style={{ textDecoration: "none" }}>
            <Box className={classes.toolbar}>
              <img src={LogoUnica} alt="logo" className="appbarlogo" />
            </Box>
          </Link>
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
          ></Typography>
          <NotificationButton />
          <HelpButton />
          <MoreButton />

          <CustomSwitch checked={isDark} onChange={handleThemeChange} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarCustom;
