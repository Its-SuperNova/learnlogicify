"use client";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import from react-intersection-observer for inView detection
import { slideUp } from "./animation"; // Import animation

export default function Index() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false, // Allows triggering multiple times when scrolling in and out
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  });

  // Title with a line break
  const title = ["Look into our Training and", "Service Gallery"];

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
      </div>
    </div>
  );
}
