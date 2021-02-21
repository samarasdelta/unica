import React from "react";
import { Link as RouteLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DeleteIcon from "@material-ui/icons/Delete";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import PersonIcon from "@material-ui/icons/Person";
import ShareIcon from "@material-ui/icons/Share";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Link from "@material-ui/core/Link";

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
        <AllInboxIcon />
      </ListItemIcon>
      <ListItemText secondary="All" />
    </ListItem>
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
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText secondary="Deleted" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AddBoxIcon />
      </ListItemIcon>
      <ListItemText secondary="New team" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupWorkIcon />
      </ListItemIcon>
      <ListItemText secondary="My Team's Name" />
    </ListItem>

    <ListSubheader inset>User&apos;s teams</ListSubheader>
  </div>
);
