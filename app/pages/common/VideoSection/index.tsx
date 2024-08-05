import React from "react";
import styles from "./VideoSection.module.css";

interface VideoSectionProps {
  thumbnail: string;
  videoSrc: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ thumbnail, videoSrc }) => {
  const handlePlay = () => {
    const video = document.getElementById("video") as HTMLVideoElement;
    video.play();
  };

  return (
    <div className={styles.videoContainer}>
      <video id="video" className={styles.video} controls poster={thumbnail}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay} onClick={handlePlay}>
        <div className={styles.playButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={styles.playIcon}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
