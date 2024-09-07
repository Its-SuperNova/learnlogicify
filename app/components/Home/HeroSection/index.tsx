"use client";
import React from "react";
import styles from "./styles.module.css";

const HeroHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subtitle}>
        <h1 className={styles.animatedGradient2}>
          Welcome to LearnLogicify Technologies
        </h1>
      </div>
      <div className={styles.title}>
        <h3 className={styles.animatedGradient}>
          "Accelerate the Tech Career and build your Future Faster"
        </h3>
      </div>
      <p className={styles.desc}>
        Discover a wide range of Programming courses Tailored to enhance your
        skills.
      </p>
      {/* Adding the button here */}
      <div className={styles.btnContainer}>
        <div className={styles.btn}>View Courses</div>
      </div>
    </div>
  );
};

export default HeroHome;
