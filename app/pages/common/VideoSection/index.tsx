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
      {isPlaying && (
        <video
          ref={videoRef}
          src={src}
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          onEnded={handleEnded}
        />
      )}
    </div>
  );
};

export default Video;
