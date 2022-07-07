import React, { useState, useEffect } from "react";
import Project from "../components/project/Project.js";
import { useParams } from "react-router-dom";

function ProjectPage() {
  let { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [id]);

  return (
    <div>
      <Project id={id} project={project} />
    </div>
  );
}

export default ProjectPage;
