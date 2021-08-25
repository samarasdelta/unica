import React from "react";
import PropTypes from "prop-types";

const Project = (props) => {
  return <h1>{`Project ID: ${props.id}`}</h1>;
};

export default Project;

Project.propTypes = {
  id: PropTypes.node,
};
