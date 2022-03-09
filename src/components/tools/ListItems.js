import React, { useState, useEffect } from "react";
import { Link as RouteLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
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
import { Typography } from "@material-ui/core";

export const DiscoverListItems = (
  <div>
    <RouteLink to="discover" style={{ textDecoration: "none", color: "grey" }}>
      <ListItem button>
        <ListItemIcon>
          <FindInPageIcon />
        </ListItemIcon>
        <ListItemText secondary="Discover" />
      </ListItem>
    </RouteLink>
    <Divider />
  </div>
);

export const dashboardListItems = (
  <div>
    <RouteLink to="dashboard" style={{ textDecoration: "none", color: "grey" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText secondary="Dashboard" />
      </ListItem>
    </RouteLink>
  </div>
);

export const mainListItems = (
  <div>
    <RouteLink to="yours" style={{ textDecoration: "none", color: "grey" }}>
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText secondary="Yours" />
      </ListItem>
    </RouteLink>

    <RouteLink to="shared" style={{ textDecoration: "none", color: "grey" }}>
      <ListItem button>
        <ListItemIcon>
          <ShareIcon />
        </ListItemIcon>
        <ListItemText secondary="Shared" />
      </ListItem>
    </RouteLink>

    <RouteLink to="deleted" style={{ textDecoration: "none", color: "grey" }}>
      <ListItem button>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText secondary="Deleted" />
      </ListItem>
    </RouteLink>
  </div>
);

export function GroupsListItems() {
  const [groups, setGroups] = useState([]);

  const fetchGroups = () => {
    fetch("/api/groups")
      .then((response) => response.json())
      .then((data) => {
        setGroups(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div>
      <Divider />
      <NewTeamButtonAPI fetchGroups={fetchGroups} />
      {groups.map(function (group, i) {
        return (
          <Link
            href={`/groups/${group.groupId}`}
            key={group.groupId}
            color="textPrimary"
            style={{ textDecoration: "none" }}
          >
            <ListItem button>
              <ListItemIcon>
                <GroupWorkIcon color="primary" />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  noWrap
                  color="textSecondary"
                  style={{ fontSize: "14px" }}
                >
                  {group.groupTitle}
                </Typography>
              </ListItemText>
            </ListItem>
          </Link>
        );
      })}
    </div>
  );
}
