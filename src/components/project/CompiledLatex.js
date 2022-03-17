import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const CompiledLatex = ({ url }) => {
  return (
    <div className="editor-textarea2">
      <div className="text-preview">
        <Typography
          color="textSecondary"
          style={{
            fontSize: "1.4rem",
          }}
        >
          <span>
            <li>{"Click the compile button to preview your work as a PDF."}</li>
            <li>
              {
                "After compile is done, you can share this pdf by clicking the Share PDF button."
              }
            </li>
            <li>{"Be sure to save your work by clicking the save button."}</li>
            <li>
              {
                "If an error occurs during compile process, it will be displayed below."
              }
            </li>
          </span>
        </Typography>
        <blockquote className="errormsg">{""}</blockquote>
      </div>
      <div className="pdf-viewer">
        <object width="100%" height="100%" data={url} type="application/pdf">
          <embed src={url} type="application/pdf" />
        </object>
      </div>
    </div>
  );
};

export default CompiledLatex;

CompiledLatex.propTypes = {
  url: PropTypes.string.isRequired,
};
