import React from "react";
import "./democss.css";
import CompiledPDF from "./CompiledPDF";
// import { Button } from "@material-ui/core";

const DemoEditor = ({ onTextChange, link }) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <textarea
            onChange={onTextChange}
            className="editor-textarea"
            defaultValue={`hello`}
          ></textarea>
        </div>
        <div className="col">
          <CompiledPDF url={link} />
        </div>
      </div>
    </div>
  );
};

export default DemoEditor;
