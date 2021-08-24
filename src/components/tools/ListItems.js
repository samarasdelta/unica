import React from "react";
import { Link as RouteLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";
import ShareIcon from "@material-ui/icons/Share";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import NewTeamButtonAPI from "../tools/NewTeamButton";

export const discoverListItems = (
  <div>
    <RouteLink to="discover" style={{ textDecoration: "none" }}>
      <Link color="textPrimary" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <FindInPageIcon />
          </ListItemIcon>
          <ListItemText secondary="Discover" />
        </ListItem>
      </Link>
    </RouteLink>
    <Divider />
  </div>
);

export const dashboardListItems = (
  <div>
    <RouteLink to="dashboard" style={{ textDecoration: "none" }}>
      <Link color="textPrimary" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText secondary="Dashboard" />
        </ListItem>
      </Link>
    </RouteLink>
  </div>
);

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText secondary="Your's" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShareIcon />
      </ListItemIcon>
      <ListItemText secondary="Shared" />
    </ListItem>
    <RouteLink to="deleted" style={{ textDecoration: "none" }}>
      <Link color="textPrimary" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText secondary="Deleted" />
        </ListItem>
      </Link>
    </RouteLink>
  </div>
);

export const secondaryListItems = (
  <div>
    <Divider />
    <NewTeamButtonAPI />
    <ListItem button>
      <ListItemIcon>
        <GroupWorkIcon />
      </ListItemIcon>
      <ListItemText secondary="'Team's name'" />
    </ListItem>
    <ListSubheader inset>User&apos;s teams</ListSubheader>
  </div>
);
