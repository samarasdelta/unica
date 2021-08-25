import React from "react";
import Project from "../components/project/Project.js";
import { useParams } from "react-router";

function ProjectPage() {
  let { id } = useParams();

  return (
    <div>
      <Project id={id} />
    </div>
  );
}

export default ProjectPage;
