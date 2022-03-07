import React from "react";
import { Typography } from "@material-ui/core";

const CompiledLatex = ({ url }) => {
  return (
    <div className="editor-textarea2">
      <div className="text-preview">
        <Typography
          style={{
            padding: "0.5vw",
            color: "#5c5c5c",
            fontWeight: "400",
            fontSize: "1.4rem",
            lineHeight: "48px",
          }}
        >
          <li>{"Click the compile button to preview your work as a PDF."}</li>
          <li>
            {
              "After compile is done, you can share this pdf by clicking the Share PDF button."
            }
          </li>
          <li>
            {
              "If an error occurs during compile process, it will be displayed below."
            }
          </li>
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
