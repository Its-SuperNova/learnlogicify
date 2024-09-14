"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const HeroHome = () => {
  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0.3, // Slightly increased delay for smoother entrance
        staggerChildren: 0.15, // Staggered children for a more gradual effect
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 }, // Minimal vertical movement (reduced from 30 to 15)
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Slower transition duration for smoothness
        ease: "easeInOut", // Keeps the animation smooth with ease in-out
      },
    },
  };

  return (
    <div className={styles.container}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={styles.contentWrapper} // Wrapper for the animated elements
      >
        <motion.div className={styles.subtitle} variants={childVariants}>
          <h1 className={styles.animatedGradient2}>
            Welcome to LearnLogicify Technologies
          </h1>
        </motion.div>

        <motion.div className={styles.title} variants={childVariants}>
          <h3 className={styles.animatedGradient}>
            &quot;Accelerate the Tech Career and build your Future Faster&quot;
          </h3>
        </motion.div>

        <motion.p className={styles.desc} variants={childVariants}>
          Discover a wide range of Programming courses Tailored to enhance your
          skills.
        </motion.p>

        <motion.div className={styles.btnContainer} variants={childVariants}>
          <div className={styles.btn}>View Courses</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroHome;
