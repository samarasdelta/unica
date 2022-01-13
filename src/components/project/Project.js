import React from "react";
import PropTypes from "prop-types";
import AppBarCustom from "../tools/AppBarCustom";
import "./democss.css";
import katex from "katex";
// import MyEditor from "./Draft";
// import EditorWYS from "./DraftWYS";
// import "./texteditorcss.css";
// import DemoEditor from "./DraftDemo";

const Project = (props) => {
  const [text, setText] = React.useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

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
          <textarea
            onChange={handleTextChange}
            className="editor-textarea"
            defaultValue={"ce{CO2 + C -> 2 C0}"}
          />
        </div>
        <div
          className="col"
          dangerouslySetInnerHTML={{ __html: katex.renderToString(text) }}
        >
          {/* <textarea
            readOnly
            className="editor-textarea"
            defaultValue={"Preview of your compiled code here!"}
            value={katex.renderToString(text)}
          /> */}
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
