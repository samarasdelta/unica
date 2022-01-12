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
      {projects.map(function (project, i) {
        return (
          <MaterialTable
            key={i}
            icons={tableIcons}
            title="Project"
            columns={[
              {
                title: "Name",
                field: "name",
              },
              { title: "Category", field: "category" },
              { title: "Owner", field: "owner" },
            ]}
            data={[
              {
                name: `${project.projectTitle}`,
                category: `${project.projectCategory}`,
                owner: "Kwstas",
              },
            ]}
          />
        );
      })}
    </div>
  );
}
