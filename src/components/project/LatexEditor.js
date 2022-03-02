import React from "react";
import "./democss.css";
import CompiledPDF from "./CompiledPDF";

const DemoEditor = ({ onTextChange, link }) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <textarea
            onChange={onTextChange}
            className="editor-textarea"
            spellCheck="false"
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
