import React from "react";

const CompiledPdf = ({ url }) => {
  return (
    <object width="100%" height="100%" data={url} type="application/pdf">
      <embed src={url} type="application/pdf" />
    </object>
  );
};

export default CompiledPdf;
