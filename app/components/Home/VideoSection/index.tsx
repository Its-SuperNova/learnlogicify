"use client";
import React, { useState, useRef, forwardRef } from "react";
import styles from "./styles.module.css";

// Define the props interface for the Video component
interface VideoProps {
  src: string;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
}

// Use forwardRef to allow ref to be passed to the video element
const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ src, controls = true, loop = false, muted = false, poster }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null); // Local ref

    const handlePlay = () => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    };

    // Combine local ref with forwarded ref if needed
    const combinedRef = ref || videoRef;

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
          ref={combinedRef} // Use the combined ref
          src={src}
          controls={controls}
          loop={loop}
          muted={muted}
          className={styles.videoElement}
          style={{ display: isPlaying ? "block" : "none" }} // Control visibility with inline styles
        />
      </div>
    );
  }
);

// Set a display name for better debugging
Video.displayName = "Video";

export default Video;
