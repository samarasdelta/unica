import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
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
                <Checkbox color="primary" />
              </TableCell>
              <TableCell>
                <Typography variant="h5" color="textPrimary">
                  Title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" color="textSecondary">
                  Owner
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" color="textSecondary">
                  Category
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
            {projects.map(function (paper, i) {
              return (
                <TableRow hover key={i}>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" value="true" />
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textPrimary" variant="body1">
                        {paper.projectTitle}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textSecondary" variant="body1">
                        {paper.projectOwnerId}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textSecondary" variant="body1">
                        {paper.projectCategory}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textSecondary" variant="body1">
                        {paper.projectDateCreated}
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

DiscoverResults.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired,
};

export default DiscoverResults;
