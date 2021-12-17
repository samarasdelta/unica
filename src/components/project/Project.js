import React from "react";
import PropTypes from "prop-types";
import AppBarCustom from "../tools/AppBarCustom";
// import MyEditor from "./Draft";
// import EditorWYS from "./DraftWYS";
// import "./texteditorcss.css";
import "./democss.css";
import DemoEditor from "./DraftDemo";

const Project = (props) => {
  return (
    <div>
      <AppBarCustom />
      <div>
        <header className="App-header">
          {`Project Title: ${props.project.projectTitle}`}
          {" || "}
          {`Project Category: ${props.project.projectCategory}`}
        </header>
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
