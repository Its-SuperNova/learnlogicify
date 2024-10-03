"use client";
import React, { useState, useRef } from "react";
import styles from "./styles.module.css";

interface VideoProps {
  src: string;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
}

const Video: React.FC<VideoProps> = ({
  src,
  controls = true,
  loop = false,
  muted = false,
  poster,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={styles.videoWrapper}>
      {!isPlaying && (
        <div
          className={styles.thumbnail}
          style={{ backgroundImage: `url(${poster})` }}
        >
          <button className={styles.playButton} onClick={handlePlay}>
            &#9658;
          </button>
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        controls={controls}
        loop={loop}
        muted={muted}
        className={styles.videoElement}
        style={{ display: isPlaying ? "block" : "none" }} // Control visibility with inline styles
      />
    </div>
  );
};

export default Video;
