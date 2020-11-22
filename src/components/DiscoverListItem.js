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
//import data from "../data.json";

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

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;
  };

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
                <Checkbox color="primary" onClick={handleSelectAll} />
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
            <TableRow hover>
              <TableCell padding="checkbox">
                <Checkbox color="primary" value="true" />
              </TableCell>
              <TableCell>
                <Box
                  className={classes.namespace}
                  alignItems="center"
                  display="flex"
                >
                  <Typography color="textPrimary" variant="body1">
                    Design and Implementation of a researcher&apos;s
                    collaborative web site
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box alignItems="center" display="flex">
                  <Typography color="textPrimary" variant="body1">
                    Dimitrios Samaras
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box alignItems="center" display="flex">
                  <Typography color="textPrimary" variant="body1">
                    Computer science
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box alignItems="center" display="flex">
                  <Typography color="textPrimary" variant="body1">
                    25/02/2020
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
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
