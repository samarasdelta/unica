import React, { useState } from "react";
import { ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./democss.css";

const DemoEditor = () => {
  let _contentState = ContentState.createFromText("Write something!");
  const raw = convertToRaw(_contentState);
  const [contentState, setContentState] = useState(raw); // ContentState JSON

  return (
    <div className="DemoEditor">
      <Editor
        defaultContentState={contentState}
        onContentStateChange={setContentState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
};
export default DemoEditor;
