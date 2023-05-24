import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import type { DraggableEvent, DraggableData } from "react-draggable";
import Draggable from "react-draggable";
import styles from "./styles.module.scss";
import {
  saveStorageData,
  getStorageData,
} from "src/shared/utils/storage-service";
import { STORAGE_KEYS } from "src/shared/constants/storage-keys";

interface Props {
  children: ReactNode;
}

interface Position {
  x: number;
  y: number;
}

export function DraggableContent({ children }: Props) {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState<Position>(
    getStorageData(STORAGE_KEYS.DRAGGABLE_POSITION) || { x: 0, y: 0 }
  );
  const [positionHistory, setPositionHistory] = useState<Position[]>([]);
  const [positionFuture, setPositionFuture] = useState<Position[]>([]);

  useEffect(() => {
    saveStorageData(STORAGE_KEYS.DRAGGABLE_POSITION, position);
  }, [position]);

  const handleDrag = (event: DraggableEvent, draggableData: DraggableData) => {
    const { x, y } = position;
    setPosition({ x: x + draggableData.deltaX, y: y + draggableData.deltaY });
  };

  const handleStart = () => {
    setPositionHistory([...positionHistory, { ...position }]);
    setPositionFuture([]);
  };

  const handleUndo = () => {
    if (positionHistory.length > 0) {
      const previousPosition = positionHistory[positionHistory.length - 1];
      setPosition(previousPosition);
      setPositionHistory(positionHistory.slice(0, -1));
      setPositionFuture([...positionFuture, { ...position }]);
    }
  };

  const handleRedo = () => {
    if (positionFuture.length > 0) {
      const nextPosition = positionFuture[positionFuture.length - 1];
      setPosition(nextPosition);
      setPositionHistory([...positionHistory, { ...nextPosition }]);
      setPositionFuture(positionFuture.slice(0, -1));
    }
  };

  return (
    <Draggable
      position={position}
      onDrag={handleDrag}
      onStart={handleStart}
      handle=".handle"
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className={styles.DraggableContent__container}>
        <div>
          <span className="handle">&#10021;</span>
          <span
            className={
              positionHistory.length === 0
                ? styles.DraggableContent_disabled
                : ""
            }
            onClick={handleUndo}
          >
            &#10226;
          </span>
          <span
            className={
              positionFuture.length === 0
                ? styles.DraggableContent_disabled
                : ""
            }
            onClick={handleRedo}
          >
            &#10227;
          </span>
        </div>
        {children}
      </div>
    </Draggable>
  );
}
