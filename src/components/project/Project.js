import React from "react";
import PropTypes from "prop-types";
import AppBarCustom from "../tools/AppBarCustom";
import "./democss.css";
// import MyEditor from "./Draft";
// import EditorWYS from "./DraftWYS";
// import "./texteditorcss.css";
// import DemoEditor from "./DraftDemo";

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
      {/* <DemoEditor /> */}

      {/* textarea */}
      <div className="row">
        <div className="col">
          <textarea className="editor-textarea">textarea 1</textarea>
        </div>
        <div className="col">
          <textarea className="editor-textarea">textarea 2</textarea>
        </div>
      </div>
      {/* textarea */}
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
