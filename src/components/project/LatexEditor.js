import React from "react";
import "./democss.css";
import CompiledLatex from "./CompiledLatex";

const LatexEditor = ({ onTextChange, link, savedText }) => {
  console.log("text: ", savedText);

  return (
    <div>
      <div className="row">
        <div className="col">
          <textarea
            onChange={onTextChange}
            className="editor-textarea"
            spellCheck="false"
            value={savedText}
          ></textarea>
        </div>
        <div className="col">
          <CompiledLatex url={link} />
        </div>
      </div>
    </div>
  );
};

export default LatexEditor;
