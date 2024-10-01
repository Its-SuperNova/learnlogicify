import React from "react";
import Player from "react-lottie-player"; // Correct import from react-lottie-player
import animationData from "../json/Page Not Found.json"; // Replace with the actual path to your Lottie JSON file
import styles from "./styles.module.css";

const CourseNotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.lottieWrapper}>
        <Player
          play
          loop
          animationData={animationData} // Use animationData instead of src
          style={{ height: "500px", width: "500px" }} // Customize the height and width
        />
      </div>
      <h2 className={styles.notFoundText}>
        Oops! No courses available.
      </h2>
    </div>
  );
};

export default CourseNotFound;
