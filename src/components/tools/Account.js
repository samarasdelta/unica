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
import Grid from "@material-ui/core/Grid";

const drawerWidth = 200;

const styles = (theme) => ({
  drawerPaper: {
    position: "fixed",
    width: drawerWidth,
    top: theme.spacing(8),
  },
  logoutContainer: {
    width: drawerWidth,
  },
  listContent: {
    justifyContent: "center",
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
          <List className={classes.listContent}>
            <ListSubheader>User Acoount</ListSubheader>
            <ListSubheader>User email</ListSubheader>
            <Divider />
            <ListSubheader>Settings</ListSubheader>
            <Divider />
            <ListItem className={classes.logoutContainer}>
              <Grid container justify="center">
                <Button component={RouteLink} to="/" variant="contained">
                  Logout
                </Button>
              </Grid>
            </ListItem>
          </List>
        </div>
      </Drawer>
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
