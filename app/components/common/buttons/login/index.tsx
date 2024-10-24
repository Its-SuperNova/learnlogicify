import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./styles.module.css"; // Import CSS module

const AnimatedButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={styles.button}
    >
      {/* Dot before text */}
      <motion.span
        className={styles.dot}
        initial={{ scale: 1, backgroundColor: "black" }}
        animate={{
          scale: hovered ? 10 : 1,
          backgroundColor: hovered ? "blue" : "black", // Change color on hover
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* About Us Text */}
      <motion.span
        className={styles.text}
        animate={{
          x: hovered ? -15 : 0, // Move text to the left on hover to make space for the arrow
        }}
        transition={{
          duration: 0.4,
          ease: [0.6, -0.05, 0.01, 0.99], // Custom cubic bezier for smoothness
        }}
      >
        Login
      </motion.span>

      {/* Arrow icon when hovered */}
      <motion.span
        className={styles.arrow}
        initial={{ opacity: 0, x: 0 }} // Arrow starts in the same position as the text
        animate={{
          opacity: hovered ? 1 : 0,
          x: hovered ? 0 : 10, // Slide arrow in while moving text
        }}
        transition={{
          duration: 0.4,
          ease: [0.6, -0.05, 0.01, 0.99], // Same easing and timing for smoothness
        }}
      >
        <FaArrowRight size={20}/>
      </motion.span>
    </motion.button>
  );
};

export default AnimatedButton;
