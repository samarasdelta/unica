//version 1

// import React, { useState } from "react";
// import { ContentState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "./democss.css";

// const DemoEditor = () => {
//   let _contentState = ContentState.createFromText("Write something!");
//   const raw = convertToRaw(_contentState);
//   const [contentState, setContentState] = useState(raw); // ContentState JSON

//   return (
//     <div className="DemoEditor">
//       <Editor
//         defaultContentState={contentState}
//         onContentStateChange={setContentState}
//         wrapperClassName="wrapper-class"
//         editorClassName="editor-class"
//         toolbarClassName="toolbar-class"
//       />
//     </div>
//   );
// };
// export default DemoEditor;

//end version 1

//version 2

// import React, { useState } from "react";
// import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import { convertToHTML } from "draft-convert";
// // import DOMPurify from "dompurify";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "./democss.css";
// import katex from "katex";

// const DemoEditor = () => {
//   const [editorState, setEditorState] = useState(() =>
//     EditorState.createEmpty()
//   );
//   const [convertedContent, setConvertedContent] = useState(null);

//   const handleEditorChange = (state) => {
//     setEditorState(state);
//     convertContentToHTML();
//   };

//   const convertContentToHTML = () => {
//     let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
//     setConvertedContent(currentContentAsHTML);
//   };

//   const createMarkup = (html) => {
//     return {
//       __html: katex.renderToString("ce{CO2 + C -> 2 C0}"),
//       // __html: DOMPurify.sanitize(html),
//     };
//   };

//   return (
//     <div className="DemoEditor">
//       <Editor
//         editorState={editorState}
//         onEditorStateChange={handleEditorChange}
//         wrapperClassName="wrapper-class"
//         editorClassName="editor-class"
//         toolbarClassName="toolbar-class"
//       />
//       <div
//         className="preview"
//         dangerouslySetInnerHTML={createMarkup(convertedContent)}
//       ></div>
//     </div>
//   );
// };

// export default DemoEditor;

//end version 2

// version 3

import React from "react";
// import PropTypes from "prop-types";
import "./democss.css";

const DemoEditor = () => {
  const [text, setText] = React.useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      {/* <div>
        <header className="App-header">
          {`Project Title: ${props.project.projectTitle}`}
          {" || "}
          {`Project Category: ${props.project.projectCategory}`}
        </header>
      </div> */}
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

// DemoEditor.propTypes = {
//   id: PropTypes.string,
//   project: PropTypes.shape({
//     projectTitle: PropTypes.string,
//     projectCategory: PropTypes.string,
//   }),
// };
