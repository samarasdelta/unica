import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import Typography from "@material-ui/core/Typography";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "title", label: "Title" },
  { id: "category", label: "Category", align: "right" },
  {
    id: "owner",
    label: "Owner",
    align: "right",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "auto",
  },
});

const DataTable = () => {
  const [projects, setProjects] = useState([]);
  // const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/api/projects/public")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  // useEffect(() => {
  //   // has to change to user id
  //   fetch("/api/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUser(data);
  //     })
  //     .catch((error) => {
  //       console.log("Error: ", error);
  //     });
  // }, []);

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {projects.map(function (project, i) {
            return (
              <TableBody key={i}>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell>
                    <Typography color="textPrimary" variant="body1">
                      {project.projectTitle}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Grid container direction="column" alignItems="flex-end">
                      <Typography color="textPrimary" variant="body1">
                        {project.projectCategory}
                      </Typography>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid container direction="column" alignItems="flex-end">
                      <Typography color="textPrimary" variant="body1">
                        kwstas
                        {project.ownerId}
                      </Typography>
                    </Grid>
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DataTable;
