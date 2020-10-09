import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DeleteIcon from '@material-ui/icons/Delete';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import PersonIcon from '@material-ui/icons/Person';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import FindInPageIcon from '@material-ui/icons/FindInPage';

export const discoverListItems = (
  <div>
    <ListItem button>
        <ListItemIcon>
          <FindInPageIcon />
        </ListItemIcon>
      <ListItemText primary="Discover" />
    </ListItem>
  </div>
);

export const mainListItems = (
  <div>
    <ListSubheader inset>Projects</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
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
    <ListSubheader inset>User's Team</ListSubheader>
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
  </div>
);