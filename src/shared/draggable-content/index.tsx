import type { ReactNode } from "react";
import Draggable from "react-draggable";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

export function DraggableContent({ children }: Props) {
  return (
    <Draggable handle=".handle">
      <div className={styles.DraggableContent__container}>
        <span className="handle">&#10021;</span>
        {children}
      </div>
    </Draggable>
  );
}
