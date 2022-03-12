import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Drawer,
  Divider,
  Box,
  ListSubheader,
  Grid,
  List,
  ListItem,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import { Link as RouteLink } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import { CustomThemeContext } from "../themes/CustomThemeProvider";
// import SwitchUI from "@material-ui/core/Switch";
// import "./MoreButtonCSS.css";

const useStyles = makeStyles({
  list: {
    minWidth: "220px",
    width: "auto",
  },
  fullList: {
    minWidth: "200px",
    width: "auto",
  },
});

// const CustomSwitch = withStyles({
//   switchBase: {
//     color: "#5C91FF",
//     "&$checked": {
//       color: "#5C91FF",
//     },
//     "&$checked + $track": {
//       backgroundColor: "#5C91FF",
//     },
//   },
//   checked: {},
//   track: {},
// })(SwitchUI);

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  // const { currentTheme, setTheme } = useContext();
  // const isDark = Boolean(currentTheme === "dark");

  // const handleThemeChange = (event) => {
  //   const { checked } = event.target;
  //   if (checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("normal");
  //   }
  // };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mx={2}>
        <Divider />
        <div>
          <ListSubheader align="center">{"User's settings"}</ListSubheader>
          <Divider />
          <List className={classes.listContent}>
            <ListItem>
              <Grid container justifyContent="center">
                <Button
                  fullWidth
                  component={RouteLink}
                  to="/account"
                  variant="contained"
                  color="primary"
                  startIcon={<PersonIcon />}
                >
                  Account
                </Button>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container justifyContent="center">
                <Button
                  fullWidth
                  component={RouteLink}
                  to="/settings"
                  variant="contained"
                  color="primary"
                  startIcon={<SettingsIcon />}
                >
                  Settings
                </Button>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container justifyContent="center">
                <Button
                  fullWidth
                  component={RouteLink}
                  to="/"
                  variant="contained"
                  startIcon={<ExitToAppSharpIcon />}
                >
                  Logout
                </Button>
              </Grid>
            </ListItem>
          </List>
        </div>
      </Box>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton color="inherit" onClick={toggleDrawer(anchor, true)}>
            <AccountCircleIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
