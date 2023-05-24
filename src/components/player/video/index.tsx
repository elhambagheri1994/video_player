import { useCurrentFrame, AbsoluteFill } from "remotion";
import { TextEditor } from "src/shared/components/text-editor";
import { DraggableContent } from "src/shared/components/draggable-content";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./styles.module.scss";

const toolbarOptions = {
  options: ["inline", "list", "history"],
  inline: {
    options: ["bold", "italic", "underline", "strikethrough"],
  },
  list: {
    options: ["unordered", "ordered"],
  },
};

interface Props {
  pause: () => void;
}
export function Video({ pause }: Props) {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill className={styles.Video}>
      The current frame is {frame}.
      <DraggableContent>
        <div>
          <TextEditor toolbarOnFocus onFocus={pause} toolbar={toolbarOptions} />
        </div>
      </DraggableContent>
    </AbsoluteFill>
  );
}
