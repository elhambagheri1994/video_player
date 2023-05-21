import { useCurrentFrame, AbsoluteFill } from "remotion";
import { TextEditor } from "src/shared/text-editor";
import { DraggableContent } from "src/shared/draggable-content";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface Props {
  pause: () => void;
}
export function Video({ pause }: Props) {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        backgroundColor: "white",
      }}
    >
      The current frame is {frame}.
      <DraggableContent>
        <div>
          <TextEditor
            toolbarOnFocus
            onFocus={pause}
            toolbar={{
              options: ["inline", "list", "history"],
              inline: {
                options: ["bold", "italic", "underline", "strikethrough"],
              },
              list: {
                options: ["unordered", "ordered"],
              },
            }}
          />
        </div>
      </DraggableContent>
    </AbsoluteFill>
  );
}
