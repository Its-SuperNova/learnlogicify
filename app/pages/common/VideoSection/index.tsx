"use client";
import React, { useState, useRef } from "react";
import styles from "./styles.module.css";

interface VideoProps {
  src: string;
  width?: string | number;
  height?: string | number;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
}

const Video: React.FC<VideoProps> = ({
  src,
  width = "100%",
  height = "100%",
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  poster,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className={styles.videoWrapper} style={{ width, height }}>
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
      {isPlaying && (
        <video
          ref={videoRef}
          src={src}
          width="100%"
          height="480px"
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          onEnded={handleEnded}
          style={{ display: "block", maxWidth: "100%" }}
        />
      )}
    </div>
  );
};

export default Video;
