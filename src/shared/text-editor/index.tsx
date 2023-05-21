import { EditorState, ContentState, convertFromHTML } from "draft-js";
import type { ContentBlock } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface Props {
  initialContent?: string;
  toolbarOnFocus?: boolean;
  toolbar?: {
    options: string[];
    inline?: {
      options: string[];
    };
    list?: {
      options: string[];
    };
    [key: string]: unknown;
  };
  onFocus?: () => void;
}

export function TextEditor({
  onFocus,
  toolbar,
  toolbarOnFocus,
  initialContent = "<p>My initial draggable content.</p>",
}: Props) {
  const contentBlocks: ContentBlock[] =
    convertFromHTML(initialContent)?.contentBlocks;
  const contentState = ContentState.createFromBlockArray(contentBlocks);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState)
  );

  const handleEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={handleEditorStateChange}
      toolbarOnFocus={toolbarOnFocus}
      onFocus={onFocus}
      toolbar={toolbar}
    />
  );
}
