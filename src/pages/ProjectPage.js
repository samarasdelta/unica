import React, { useState, useEffect } from "react";
import Project from "../components/project/Project.js";
import { useParams } from "react-router";
import PropTypes from "prop-types";

function ProjectPage(props) {
  let { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProject(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  });

  return (
    <div>
      <Project id={id} project={project} />
    </div>
  );
}

export default ProjectPage;

ProjectPage.propTypes = {
  id: PropTypes.node,
};
