import React from "react";
import "./democss.css";
import CompiledLatex from "./CompiledLatex";
import PropTypes from "prop-types";

const LatexEditor = ({ onTextChange, link, savedText }) => {
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

LatexEditor.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  savedText: PropTypes.string.isRequired,
};
