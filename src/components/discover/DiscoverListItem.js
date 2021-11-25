import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";

const DiscoverResults = () => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
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

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card>
      <Box minWidth={1050}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox color="primary" disabled />
              </TableCell>
              <TableCell>
                <Typography variant="h5" color="textPrimary">
                  Title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" color="textSecondary">
                  Category
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" color="textSecondary">
                  Owner
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" color="textSecondary">
                  Last Modified
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map(function (project, i) {
              return (
                <TableRow hover key={i}>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" value="true" />
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textPrimary" variant="body1">
                        {project.projectTitle}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textSecondary" variant="body1">
                        {project.projectCategory}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textSecondary" variant="body1">
                        {project.projectOwnerId}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textSecondary" variant="body1">
                        {project.projectDateCreated}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        component="div"
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

export default DiscoverResults;
