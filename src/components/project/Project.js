import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import DraftDemo from "./DraftDemo";
import AppBarCustom from "../tools/AppBarCustom";
import DownloadButton from "../tools/DownloadButton";
import "./democss.css";

const Project = (props) => {
  // const handleTextChange = (e) => {
  //   setText(e.target.value);
  // };

  return (
    <div>
      <AppBarCustom />
      <div className="App-header">
        <header>
          {`Title: `}
          <span className="color-change">{`${props.project.projectTitle}`}</span>
          {", "}
          {`Category: `}
          <span className="color-change">{`${props.project.projectCategory}`}</span>{" "}
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AutorenewIcon />}
            style={{
              fontSize: "calc(2px + 1.5vmin)",
            }}
          >
            Compile
          </Button>
        </header>
      </div>
      <DraftDemo />
      <DownloadButton />
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
