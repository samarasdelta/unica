import React, { useEffect } from "react";
import PropTypes from "prop-types";
import LatexEditor from "./LatexEditor";
import { Grid } from "@material-ui/core";
import AppBarCustom from "../tools/AppBarCustom";
// import DownloadButton from "./DownloadButton";
import CompileButton from "./buttons/CompileButton";
import CopyLinkButton from "./buttons/CopyLinkButton";
import SaveButton from "./buttons/SaveButton";
import "./democss.css";

const Project = (props) => {
  const { id } = props;

  const [text, setText] = React.useState("");
  const [link, setLink] = React.useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const compile = () => {
    fetch("/api/latex", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: text,
    })
      .then((response) => response.json())
      .then((data) => {
        setLink(data.pdf);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const saveProject = async () => {
    await fetch(`/api/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setText(data.projectInfo);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [id]);

  return (
    <div>
      <AppBarCustom />
      <div className="App-header">
        <div className="space">
          <Grid
            spacing={1}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item>
              <CompileButton compile={compile} />
            </Grid>
            <Grid item>
              <SaveButton saveProject={saveProject} />
            </Grid>
            <Grid item>
              <CopyLinkButton link={link} />
            </Grid>
          </Grid>
        </div>
        <header className="dflt">
          {`Title: `}
          <span className="color-change">
            {`${props.project.projectTitle}`}
          </span>
          {", "}
          {`Category: `}
          <span className="color-change">
            {`${props.project.projectCategory}`}
          </span>
        </header>
      </div>
      <LatexEditor
        savedText={text}
        onTextChange={handleTextChange}
        link={link}
      />
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
