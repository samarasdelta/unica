import React, { useState, useEffect, useContext } from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Container,
  IconButton,
  Link,
  Box,
  withStyles,
  Typography,
  Toolbar,
  AppBar,
  Drawer,
  List,
} from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SwitchUI from "@material-ui/core/Switch";
import {
  DiscoverListItems,
  dashboardListItems,
  mainListItems,
  GroupsListItems,
} from "../tools/ListItems";
import Logo from "../images/unicasmall1.png";
import DeletedListItem from "./DeletedListItem";
import MoreButton from "../tools/AccountProfileButton";
import { CustomThemeContext } from "../tools/themes/CustomThemeProvider";
import NotificationButton from "../tools/NotificationButton";
import HelpButton from "../tools/HelpButton";
import { useHistory } from "react-router-dom";

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
    height: 200,
    minWidth: 580,
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

export default function Deleted() {
  const [open, setOpen] = React.useState(true);
  const [projects, setProjects] = useState([]);
  const classes = useStyles();
  let history = useHistory();

  const verifiedToken = localStorage.token;

  const fetchDeletedProjects = () => {
    fetch("/api/projects/deleted", {
      headers: {
        "Content-Type": "application/json;",
        Authorization: `Bearer ${verifiedToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        alert("Error: 403 Forbidden", error.message);
        history.push("/login");
      });
  };

  useEffect(() => {
    fetchDeletedProjects();
  });

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
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
            {"Deleted"}
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
          </List>{" "}
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Grid container spacing={2}>
            {/* Project */}
            {projects.map(function (project, i) {
              return (
                <Grid item xs={12} md={6} key={i}>
                  <Paper className={fixedHeightPaper}>
                    <DeletedListItem
                      fetchDeletedProjects={fetchDeletedProjects}
                      id={project.projectId}
                      title={project.projectTitle}
                      category={project.projectCategory}
                      dateCreated={project.projectDateCreated}
                      projectState={project.projectState}
                      projectIsDeleted={project.projectDeleted}
                    />
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
