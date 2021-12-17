import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { Paper } from "@material-ui/core";
import "draft-js/dist/Draft.css";
import "./texteditorcss.css";

export default function EditorWYS() {
  return (
    <div className="mainborder">
      <Paper className="maintextarea">
        <Editor
          placeholder="Write something!"
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          toolbar={{
            inline: { inDropdown: false },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
          }}
        />
      </Paper>
    </div>
  );
}
