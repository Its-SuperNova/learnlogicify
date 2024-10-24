import React from "react";
import Player from "react-lottie-player";
import animationData from "../../json/Page Not Found.json";
import styles from "./styles.module.css";

const CourseNotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h2 className={styles.notFoundText}>Oops! No courses available.</h2>
      <div className={styles.lottieWrapper}>
        <Player
          play
          loop
          animationData={animationData}
          className={styles.lottiePlayer} // Add a CSS class for responsive sizing
        />
      </div>
    </div>
  );
};

export default CourseNotFound;
