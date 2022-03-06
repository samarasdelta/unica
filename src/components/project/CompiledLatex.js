import React from "react";
import { Typography } from "@material-ui/core";

const CompiledLatex = ({ url }) => {
  return (
    <div className="editor-textarea2">
      <div className="text-preview">
        <Typography
          variant="h5"
          color="textSecondary"
          style={{ padding: "1vw" }}
        >
          {"Click the compile button to preview your work as a PDF."}
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          style={{ padding: "1vw" }}
        >
          {
            "After compile is done, you can share this pdf by clicking the Share PDF button. "
          }
        </Typography>
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
