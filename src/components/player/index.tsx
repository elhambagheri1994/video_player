import { useRef } from "react";
import { Player } from "@remotion/player";
import type { PlayerRef } from "@remotion/player";
import { Video } from "./video";
import styles from "./styles.module.scss";

interface Props {
  controls?: boolean;
  loop?: boolean;
  durationInFrames?: number;
  compositionWidth?: number;
  clickToPlay?: boolean;
  spaceKeyToPlayOrPause?: boolean;
  compositionHeight?: number;
  fps?: number;
}

function VideoPlayer({
  controls = true,
  loop = true,
  durationInFrames = 300,
  compositionWidth = 500,
  clickToPlay = false,
  spaceKeyToPlayOrPause = false,
  compositionHeight = 500,
  fps = 60,
}: Props) {
  const playerRef = useRef<PlayerRef>(null);

  const pause = () => {
    playerRef.current?.pause();
  };
  const play = () => {
    playerRef.current?.play();
  };
  return (
    <div className={styles.Player}>
      <Player
        controls={controls}
        loop={loop}
        ref={playerRef}
        component={Video}
        durationInFrames={durationInFrames}
        compositionWidth={compositionWidth}
        clickToPlay={clickToPlay}
        spaceKeyToPlayOrPause={spaceKeyToPlayOrPause}
        compositionHeight={compositionHeight}
        fps={fps}
        inputProps={{ pause, play }}
      />
    </div>
  );
}

export { VideoPlayer };
