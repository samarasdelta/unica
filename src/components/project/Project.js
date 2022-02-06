import React from "react";
import PropTypes from "prop-types";
import DraftDemo from "./DraftDemo";
import AppBarCustom from "../tools/AppBarCustom";
import DownloadButton from "../tools/DownloadButton";
import "./democss.css";
import CompileButton from "./CompileButton";

const Project = (props) => {
  // const handleTextChange = (e) => {
  //   setText(e.target.value);
  // };

  return (
    <div>
      <AppBarCustom />
      <div className="App-header">
        <CompileButton />
        <header>
          {`Title: `}
          <span className="color-change">{`${props.project.projectTitle}`}</span>
          {", "}
          {`Category: `}
          <span className="color-change">{`${props.project.projectCategory}`}</span>
        </header>
      </div>
      <DraftDemo />
      <DownloadButton />
    </div>
  );
};

export default Project;

Project.propTypes = {
  id: PropTypes.string,
  project: PropTypes.shape({
    projectTitle: PropTypes.string,
  }),
};
