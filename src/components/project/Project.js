import React from "react";
import PropTypes from "prop-types";
import AppBarCustom from "../tools/AppBarCustom";
import MyEditor from "./Draft";
import "./texteditorcss.css";

const Project = (props) => {
  return (
    <div>
      <AppBarCustom />
      <div className="projecttitle">
        <br />
        <br />
        <br />
        <h3>
          {`Project Title: ${props.project.projectTitle}`}
          {" || "}
          {`Project Category: ${props.project.projectCategory}`}
        </h3>
      </div>
      <MyEditor />
    </div>
  );
};

export default Project;

Project.propTypes = {
  id: PropTypes.string,
  project: PropTypes.shape({
    projectTitle: PropTypes.string,
    projectCategory: PropTypes.string,
  }),
};
