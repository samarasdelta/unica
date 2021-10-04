import React from "react";
import PropTypes from "prop-types";
import AppBarCustom from "../tools/AppBarCustom";

const Project = (props) => {
  return (
    <div>
      <AppBarCustom />
      <div>
        <br />
        <br />
        <br />
        <h3>
          {`Project Title: ${props.project.projectTitle}`}
          {" || "}
          {`Project Category: ${props.project.projectCategory}`}
        </h3>
      </div>
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
