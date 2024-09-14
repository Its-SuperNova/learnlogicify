import React from "react";
import styles from "./styles.module.css";

const AboutPortal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>This is the left section</p>
      </div>
      <div className={styles.right}>
        <video
          src="MP4/video1.mp4"
          className={styles.video} 
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default AboutPortal;
