import React, { useState } from "react";
//import clsx from "clsx";
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
  makeStyles,
} from "@material-ui/core";
import data from "../data.json";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(1),
  },
  namespace: {
    marginRight: theme.spacing(0),
  },
  spaceR: {
    marginRight: theme.spacing(0),
  },
  spaceL: {
    marginLeft: theme.spacing(0),
  },
}));

const DiscoverResults = ({ className, customers }) => {
  const classes = useStyles();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className={classes.box}>
      <Box minWidth={1050}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox color="primary" />
              </TableCell>
              <TableCell>
                <Typography>Title</Typography>
              </TableCell>
              <TableCell>
                <Typography>Owner</Typography>
              </TableCell>
              <TableCell>
                <Typography>Category</Typography>
              </TableCell>
              <TableCell>
                <Typography>Last Modified</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.papers.map(function (paper, i) {
              return (
                <TableRow hover key={i}>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" value="true" />
                  </TableCell>
                  <TableCell>
                    <Box
                      className={classes.namespace}
                      alignItems="center"
                      display="flex"
                      title={paper.title}
                    >
                      <Typography color="textPrimary" variant="body1">
                        {paper.title}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textPrimary" variant="body1">
                        {paper.owner}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textPrimary" variant="body1">
                        {paper.category}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textPrimary" variant="body1">
                        {paper.dateCreated}
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
