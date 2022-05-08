import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import { forwardRef } from "react";
import Search from "@material-ui/icons/Search";
import Clear from "@material-ui/icons/Clear";
import PropTypes from "prop-types";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
// import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
// import Tooltip from "@material-ui/core/Tooltip";

//component icons declaration
const tableIcons = {
  // eslint-disable-next-line react/display-name
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  // eslint-disable-next-line react/display-name
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  // eslint-disable-next-line react/display-name
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  // eslint-disable-next-line react/display-name
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  // eslint-disable-next-line react/display-name
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  // eslint-disable-next-line react/display-name
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  // eslint-disable-next-line react/display-name
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  // eslint-disable-next-line react/display-name
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};
//end component icons declaration
export default function DataTable() {
  const [projects, setProjects] = useState([]);

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

  return (
    <div>
      <MaterialTable
        icons={tableIcons}
        title="Projects"
        localization={{
          body: {
            emptyDataSourceMessage: "No projects to display",
          },
        }}
        columns={[
          {
            title: "Name",
            field: "name",
          },
          { title: "Category", field: "category" },
          { title: "Owner", field: "owner" },
        ]}
        data={projects.map((project) => {
          return {
            name: `${project.projectTitle}`,
            category: `${project.projectCategory}`,
            owner: `${project.userFullName}`,
          };
        })}
        actions={[
          {
            tooltip: "Apply",
            icon: "save",
            onClick: (event, rowData) => alert("You saved " + rowData.name),
          },
        ]}
        components={{
          Action: (props) => (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={(event) => props.action.onClick(event, props.data)}
              endIcon={<SendIcon />}
            >
              Apply
            </Button>
          ),
        }}
        options={{
          pageSize: 5,
        }}
      >
        {/* <Link href={`/project/${project.projectId}`} /> */}
      </MaterialTable>
    </div>
  );
}
DataTable.propTypes = {
  data: PropTypes.any,
  action: PropTypes.any,
};
