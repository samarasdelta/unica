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
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import Link from "@material-ui/core/Link";

export const discoverListItems = (
  <div>
    <RouteLink to="discover" style={{ textDecoration: "none" }}>
      <Link color="textPrimary" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <FindInPageIcon />
          </ListItemIcon>
          <ListItemText primary="Discover" />
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
          <ListItemText primary="Dashboard" />
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
      <ListItemText primary="All" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InsertDriveFileIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Your's" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Deleted" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <GroupWorkIcon />
      </ListItemIcon>
      <ListItemText primary="1st team" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupWorkIcon />
      </ListItemIcon>
      <ListItemText primary="2nd team" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupWorkIcon />
      </ListItemIcon>
      <ListItemText primary="New team" />
    </ListItem>
    <ListSubheader inset>User&apos;s teams</ListSubheader>
  </div>
);
