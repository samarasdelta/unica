import React, { useState, useEffect } from "react";
import Group from "../components/groups/Group.js";
import { useParams } from "react-router-dom";

function ProjectPage() {
  let { id } = useParams();
  const [group, setGroup] = useState({});

  useEffect(() => {
    fetch(`/api/groups/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setGroup(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [id]);

  return (
    <div>
      <Group id={id} group={group} />
    </div>
  );
}

export default ProjectPage;
