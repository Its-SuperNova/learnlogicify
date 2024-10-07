import React from "react";
import Player from "react-lottie-player";
import animationData from "../../json/Fried Egg.json"; // Adjust the path accordingly
import styles from "./styles.module.css";

const CourseNotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.lottieWrapper}>
        <Player
          play
          loop
          animationData={animationData}
          className={styles.lottiePlayer} // Use CSS class for responsive sizing
        />
      </div>
      <h2 className={styles.notFoundText}>
        We&apos;re cooking up the courses you need! <br />
        They&apos;ll be served hot and fresh soon.
      </h2>
    </div>
  );
};

export default CourseNotFound;
