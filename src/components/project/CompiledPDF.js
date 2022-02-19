import React from "react";

const CompiledPdf = () => {
  return (
    <object
      width="100%"
      height="100%"
      data="http://localhost:4000/api/latex/public/48b25b2e-59af-42a7-afba-c3cbaded8d96.pdf"
      type="application/pdf"
    >
      <embed
        src="http://localhost:4000/api/latex/public/48b25b2e-59af-42a7-afba-c3cbaded8d96.pdf"
        type="application/pdf"
      />
    </object>
  );
};

export default CompiledPdf;
