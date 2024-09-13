"use client";
import { motion } from "framer-motion";
import { slideUp } from "./animation";
import styles from "./styles.module.scss";

// Define the types for props
interface SlideUpWordProps {
  title: string[]; // Update title type to string array
  isInView: boolean;
  className?: string; // Optional className prop
}

export default function SlideUpWord({
  title,
  isInView,
  className,
}: SlideUpWordProps) {
  return (
    <h1 className={`${styles.title} ${className || ""}`}>
      {title.map((line: string, lineIndex: number) => (
        <div key={lineIndex}>
          {line.split(" ").map((word: string, wordIndex: number) => (
            <span key={wordIndex} className={styles.mask}>
              <motion.span
                variants={slideUp}
                custom={wordIndex}
                initial="initial"
                animate={isInView ? "open" : "initial"}
              >
                {word}
              </motion.span>{" "}
            </span>
          ))}
        </div>
      ))}
    </h1>
  );
}
