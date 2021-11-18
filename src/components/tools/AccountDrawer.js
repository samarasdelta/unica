import React from "react";
import { Link as RouteLink } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Button, ListItem } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import Grid from "@material-ui/core/Grid";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const drawerWidth = 200;

const styles = (theme) => ({
  drawerPaper: {
    position: "fixed",
    width: drawerWidth,
    top: theme.spacing(8),
  },

  listContent: {
    marginBottom: theme.spacing(1),
  },
});

class PersistentDrawer extends React.Component {
  state = {
    open: false,
  };

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    const drawer = (
      <ClickAwayListener>
        <Drawer
          variant="persistent"
          anchor="right"
          open={open}
          PaperProps={{
            variant: "outlined",
          }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div>
            <ListSubheader align="center">ece00792@uowm.gr</ListSubheader>
            <Divider />
            <List className={classes.listContent}>
              <ListItem>
                <Grid container justify="center">
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
                <Grid container justify="center">
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
                <Grid container justify="center">
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
        </Drawer>
      </ClickAwayListener>
    );

    return (
      <div>
        {drawer}
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={this.handleDrawerToggle}
        >
          <AccountCircleIcon />
        </IconButton>
      </div>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
