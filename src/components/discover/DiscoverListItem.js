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
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Moment from "react-moment";

const columns = [
  { id: "title", label: "Title", minWidth: 200 },
  { id: "category", label: "Category", minWidth: 0 },
  {
    id: "owner",
    label: "Owner",
    minWidth: 0,
  },
  {
    id: "lmodified",
    label: "Last Modified",
    minWidth: 0,
    align: "right",
  },
];

function createData(title, category, owner, size) {
  const lmodified = owner / size;
  return { title, category, owner, size, lmodified };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  // createData("China", "CN", 1403500365, 9596961),
  // createData("Italy", "IT", 60483973, 301340),
  // createData("United States", "US", 327167434, 9833520),
  // createData("Canada", "CA", 37602103, 9984670),
  // createData("Australia", "AU", 25475400, 7692024),
  // createData("Germany", "DE", 83019200, 357578),
  // createData("Ireland", "IE", 4857000, 70273),
  // createData("Mexico", "MX", 126577691, 1972550),
  // createData("Japan", "JP", 126317000, 377973),
  // createData("France", "FR", 67022000, 640679),
  // createData("United Kingdom", "GB", 67545757, 242495),
  // createData("Russia", "RU", 146793744, 17098246),
  // createData("Nigeria", "NG", 200962417, 923768),
  // createData("Brazil", "BR", 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const DataTable = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects/public")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
  };

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
                    <Typography color="textPrimary" variant="body1">
                      {project.projectCategory}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textPrimary" variant="body1">
                      kwstas
                      {project.ownerId}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-end"
                    >
                      <Typography color="textPrimary" variant="body1">
                        <Moment position="right" format="DD/MM/YYYY - HH:mm">
                          {project.dateCreated}
                        </Moment>
                      </Typography>
                    </Grid>
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;
