import React from "react";
import { Paper } from "@material-ui/core";
// import { IconButton } from "@material-ui/core";
// import ForwardIcon from "@material-ui/icons/Forward";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./texteditorcss.css";

export default function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  return (
    <div className="mainborder">
      <Paper className="maintextarea" onClick={focusEditor}>
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={setEditorState}
          placeholder="Write something!"
        />
      </Paper>
      {/* <div clasName="compilearrow">
        <IconButton>
          <ForwardIcon />
        </IconButton>
      </div> */}
      <Paper className="compiledtextare">Compiled Text</Paper>
    </div>
  );
}
