import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import type { ContentBlock } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  getStorageData,
  saveStorageData,
} from "src/shared/utils/storage-service";
import { STORAGE_KEYS } from "src/shared/constants/storage-keys";

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
  const [editorState, setEditorState] = useState<EditorState>(() => {
    const storedEditorState = getStorageData(STORAGE_KEYS.EDITOR_STATE);
    return storedEditorState
      ? EditorState.createWithContent(convertFromRaw(storedEditorState))
      : EditorState.createWithContent(contentState);
  });

  useEffect(() => {
    saveStorageData(
      STORAGE_KEYS.EDITOR_STATE,
      convertToRaw(editorState.getCurrentContent())
    );
  }, [editorState]);

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
