import React from "react";
import PropTypes from "prop-types";
import AppBarCustom from "../tools/AppBarCustom";
// import MyEditor from "./Draft";
// import EditorWYS from "./DraftWYS";
import "./texteditorcss.css";
import DemoEditor from "./DraftDemo";

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
      {/* <MyEditor /> */}
      {/* <EditorWYS /> */}
      <DemoEditor />
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
