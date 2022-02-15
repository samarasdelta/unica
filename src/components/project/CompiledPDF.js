import React from "react";

const CompiledPdf = () => {
  return (
    <object
      width="100%"
      height="100%"
      data="http://localhost:4000/api/latex/public/fda8de62-be91-4601-8f74-75a372633a38.pdf"
      type="application/pdf"
    >
      <embed
        src="http://localhost:4000/api/latex/public/fda8de62-be91-4601-8f74-75a372633a38.pdf"
        type="application/pdf"
      />
    </object>
  );
};

export default CompiledPdf;
