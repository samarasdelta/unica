import React from "react";
import PropTypes from "prop-types";
import DraftDemo from "./LatexEditor";
import { Grid } from "@material-ui/core";
import AppBarCustom from "../tools/AppBarCustom";
import DownloadButton from "./DownloadButton";
import CompileButton from "./CompileButton";
import "./democss.css";
import { Button } from "@material-ui/core";

const Project = (props) => {
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

  return (
    <div>
      <AppBarCustom />
      <div className="App-header">
        <div className="space">
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item>
              <CompileButton compile={compile} />
            </Grid>
            <Grid item>
              <DownloadButton />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
        </div>
        <header>
          {`Title: `}
          <span className="color-change">{`${props.project.projectTitle}`}</span>
          {", "}
          {`Category: `}
          <span className="color-change">{`${props.project.projectCategory}`}</span>
        </header>
      </div>
      <DraftDemo onTextChange={handleTextChange} link={link} />
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
