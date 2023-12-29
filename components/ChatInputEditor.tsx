"use client";
import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./editor.css";

const ChatInputEditor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      placeholder="Write message here..."
    />
  );
};

export default ChatInputEditor;
