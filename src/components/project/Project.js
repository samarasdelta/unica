import React from "react";
import PropTypes from "prop-types";

const Project = (props) => {
  return (
    <div>
      <h1>{`Project Title: ${props.project.projectTitle}`}</h1>
      <div>Project Category: {`${props.project.projectCategory}`}</div>
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
