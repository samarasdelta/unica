import React from "react";

const CompiledPdf = ({ url }) => {
  return (
    <div className="editor-textarea2">
      <object width="100%" height="100%" data={url} type="application/pdf">
        <embed src={url} type="application/pdf" />
      </object>
    </div>
  );
};

export default CompiledPdf;
