import React from "react";
import PropTypes from "prop-types";
import LatexEditor from "./LatexEditor";
import { Grid } from "@material-ui/core";
import AppBarCustom from "../tools/AppBarCustom";
// import DownloadButton from "./DownloadButton";
import CompileButton from "./CompileButton";
import "./democss.css";
import { Button } from "@material-ui/core";

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
        console.log("data", data);
        setLink(data.pdf);
        console.log("text", text);
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
    });

    window.location.reload();
  };

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
              <Button onClick={saveProject} variant="contained" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
        </div>
        <header>
          <span className="color-change">{`Title: `}</span>
          {`${props.project.projectTitle}`}
          <span className="color-change">
            {", "}
            {`Category: `}
          </span>
          {`${props.project.projectCategory}`}
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
