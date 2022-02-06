import React from "react";
import "./democss.css";

const DemoEditor = () => {
  const [text, setText] = React.useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <textarea
            onChange={handleTextChange}
            className="editor-textarea"
            defaultValue={`hello`}
          ></textarea>
        </div>
        <div className="col">
          <textarea
            readOnly
            className="editor-textarea2"
            value={text}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default DemoEditor;
