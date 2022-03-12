import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import Search from "@material-ui/icons/Search";
import Clear from "@material-ui/icons/Clear";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import IconButton from "@material-ui/core/IconButton";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Tooltip from "@material-ui/core/Tooltip";

//component icons declaration
const tableIcons = {
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
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
        title="Project"
        columns={[
          {
            title: "Name",
            field: "name",
          },
          { title: "Category", field: "category", align: "right" },
          { title: "Owner", field: "owner", align: "right" },
        ]}
        data={projects.map((project) => {
          return {
            name: `${project.projectTitle}`,
            category: `${project.projectCategory}`,
            owner: "Kwstas",
          };
        })}
        actions={[
          {
            tooltip: "Apply",
            onClick: (event, rowData) => alert("You saved " + rowData.name),
          },
        ]}
        components={{
          Action: (props) => (
            <Tooltip title="Apply">
              <IconButton
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="contained"
                size="small"
              >
                <AddBoxIcon />
              </IconButton>
            </Tooltip>
          ),
        }}
        options={{
          pageSize: 10,
          headerStyle: {
            backgroundColor: "#eee",
            color: "#000",
          },
        }}
      >
        {/* <Link href={`/project/${project.projectId}`} /> */}
      </MaterialTable>
    </div>
  );
}
