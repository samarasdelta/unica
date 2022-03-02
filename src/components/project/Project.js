import React from "react";
import PropTypes from "prop-types";
import DraftDemo from "./DraftDemo";
import { Grid } from "@material-ui/core";
import AppBarCustom from "../tools/AppBarCustom";
import DownloadButton from "./DownloadButton";
import "./democss.css";
import SaveButton from "./SaveButton";
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
        console.log("data", data);
        setLink(data.pdf);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    console.log("text", text);
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
              <Button variant="contained" color="primary" onClick={compile}>
                Compile
              </Button>
            </Grid>
            <Grid item>
              <DownloadButton />
            </Grid>
            <Grid item>
              <SaveButton />
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
