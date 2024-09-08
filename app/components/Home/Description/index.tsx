"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import from react-intersection-observer for inView detection
import { slideUp, fadeIn } from "./animation"; // Import both animations
import Rounded from "../../common/buttons/roundButton";

export default function Index() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false, // Allows triggering multiple times when scrolling in and out
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  });

  const buttonRef = useRef<HTMLDivElement>(null);

  // Parallax effect logic
  useEffect(() => {
    const handleScroll = () => {
      const buttonElement = buttonRef.current;
      if (buttonElement) {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * 0.2; // Adjust the speed of the parallax
        buttonElement.style.transform = `translateY(${offset}px)`; // Apply parallax effect
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Updated title with a line break
  const title = ["One Platform,", "endless opportunities."];
  const description =
    "At LearnLogicify Technologies, we are committed to accelerating tech careers by providing a comprehensive, cutting-edge learning platform. Whether you're a beginner or an advanced learner, our courses cover essential skills in web development, AI, and other emerging technologies.";

  return (
    <div ref={descriptionRef} className={styles.description}>
      <div className={styles.body}>
        <h1>
          {title.map((line, lineIndex) => (
            <div key={lineIndex}>
              {line.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className={styles.mask}>
                  <motion.span
                    variants={slideUp}
                    custom={wordIndex}
                    initial="initial"
                    animate={isInView ? "open" : "initial"} // Trigger text reveal animation
                  >
                    {word}
                  </motion.span>{" "}
                </span>
              ))}
            </div>
          ))}
        </h1>
        <motion.p
          variants={fadeIn}
          initial="initial"
          animate={isInView ? "open" : "initial"} // Trigger fade-in animation
          className={styles.descriptionText}
        >
          {description}
        </motion.p>
        <Rounded className={styles.btn}>
          <p>Get Started</p>
        </Rounded>
      </div>
      <div ref={buttonRef} className={styles.buttonContainer}>
        <Rounded className={styles.button}>
          <p>About Us</p>
        </Rounded>
      </div>

    </div>
  );
}
