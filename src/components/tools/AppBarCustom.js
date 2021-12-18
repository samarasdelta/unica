import React, { useContext } from "react";
import {
  // createTheme,
  // ThemeProvider,
  makeStyles,
  Badge,
  IconButton,
  Typography,
  withStyles,
  Toolbar,
  AppBar,
  Box,
  Link,
  CssBaseline,
} from "@material-ui/core";
import clsx from "clsx";
// import { blue, red } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import HelpIcon from "@material-ui/icons/Help";
import SwitchUI from "@material-ui/core/Switch";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreButton from "./AccountProfileButton";
import LogoUnica from "./images/favicon.ico";
import { CustomThemeContext } from "./themes/CustomThemeProvider";

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
      color: "#000000",
    },
    "&$checked + $track": {
      backgroundColor: "#000000",
    },
  },
  checked: {},
  track: {},
})(SwitchUI);

const AppBarCustom = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  // const [darkState, setDarkState] = useState(false);
  // const palletType = darkState ? "dark" : "light";
  // const mainPrimaryColor = darkState ? blue[200] : blue[800];
  // const mainSecondaryColor = darkState ? red[600] : red[500];
  // const darkTheme = createTheme({
  //   backgroundColor: "#212121",
  //   palette: {
  //     type: palletType,
  //     primary: {
  //       main: mainPrimaryColor,
  //     },
  //     secondary: {
  //       main: mainSecondaryColor,
  //     },
  //   },
  // });

  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const isDark = Boolean(currentTheme === "dark");

  const handleThemeChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("normal");
    }
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      {/* <ThemeProvider theme={darkTheme}> */}
      <CssBaseline />
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

          <CustomSwitch checked={isDark} onChange={handleThemeChange} />
        </Toolbar>
      </AppBar>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default AppBarCustom;
