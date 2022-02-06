import React from "react";
import PropTypes from "prop-types";
import DraftDemo from "./DraftDemo";
import { Grid } from "@material-ui/core";
import AppBarCustom from "../tools/AppBarCustom";
import DownloadButton from "./DownloadButton";
import "./democss.css";
import CompileButton from "./CompileButton";
import SaveButton from "./SaveButton";

const Project = (props) => {
  // const handleTextChange = (e) => {
  //   setText(e.target.value);
  // };

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
              <CompileButton />
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
      <DraftDemo />
      {/* <div className="space">
        </div> */}
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
