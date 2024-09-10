"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  slideUp,
  fadeIn,
  gridSlideUp,
  gridFadeIn,
  buttonReveal,
} from "./animation"; // Import new animations
import Rounded from "../../common/buttons/roundButton";

export default function Index() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false, // Allows triggering multiple times when scrolling in and out
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  });

  const { ref: gridRef, inView: isGridInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

 const { ref: buttonRef, inView: isButtonInView } = useInView({
   triggerOnce: true, // Ensure the animation only happens once
   threshold: 0.1,
 });


  // Title and description
  const title = "Get to Know About Us";
  const description =
    "At LearnLogicify Technologies, we are dedicated to empowering individuals to achieve success in the tech industry through innovative and accessible learning solutions. Our platform bridges the gap between theoretical knowledge and real-world application, offering expertly crafted courses, hands-on projects, and tailored assessments. By leveraging cutting-edge educational tools and a supportive learning environment, we ensure that every learner can fast-track their career growth and gain the skills necessary to excel in the ever-evolving tech landscape.";

  return (
    <div ref={descriptionRef} className={styles.description}>
      <div className={styles.body}>
        <h1 className={styles.title}>
          {title.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className={styles.mask}>
              <motion.span
                variants={slideUp} // Title animation unchanged
                custom={wordIndex}
                initial="initial"
                animate={isInView ? "open" : "initial"} // Trigger text reveal animation
              >
                {word}
              </motion.span>{" "}
            </span>
          ))}
        </h1>
        <motion.p
          variants={fadeIn} // Description animation unchanged
          initial="initial"
          animate={isInView ? "open" : "initial"} // Trigger fade-in animation
          className={styles.descriptionText}
        >
          {description}
        </motion.p>
        {/* New section */}
        <div ref={gridRef} className={styles.gridSection}>
          <motion.div
            className={styles.gridItem}
            variants={gridSlideUp} // Apply new gridSlideUp animation here
            initial="initial"
            animate={isGridInView ? "open" : "initial"}
          >
            <motion.h2
              variants={gridSlideUp} // Apply smooth slide-up for h2
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              Comprehensive Learning
            </motion.h2>
            <motion.p
              variants={gridFadeIn} // Apply smooth fade-in for p
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              We provide a wide range of learning materials, from video
              tutorials to interactive modules, ensuring that every aspect of
              your education is covered.
            </motion.p>
          </motion.div>
          <motion.div
            className={styles.gridItem}
            variants={gridSlideUp} // Apply new gridSlideUp animation
            initial="initial"
            animate={isGridInView ? "open" : "initial"}
          >
            <motion.h2
              variants={gridSlideUp} // Apply smooth slide-up for h2
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              Expert Guidance
            </motion.h2>
            <motion.p
              variants={gridFadeIn} // Apply smooth fade-in for p
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              Learn from industry professionals with practical insights and
              experience, helping you gain real-world knowledge and skills.
            </motion.p>
          </motion.div>
          <motion.div
            className={styles.gridItem}
            variants={gridSlideUp} // Apply new gridSlideUp animation
            initial="initial"
            animate={isGridInView ? "open" : "initial"}
          >
            <motion.h2
              variants={gridSlideUp} // Apply smooth slide-up for h2
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              Career Focused
            </motion.h2>
            <motion.p
              variants={gridFadeIn} // Apply smooth fade-in for p
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              Our programs equip you with the certifications and skills needed
              to thrive in the tech world and build a strong career foundation.
            </motion.p>
          </motion.div>
        </div>
        <div ref={buttonRef} className={styles.btnContainer}>
          <motion.div
            variants={buttonReveal} // Button reveal animation for "View Courses"
            initial="initial"
            animate={isButtonInView ? "open" : "initial"}
          >
            <Rounded className={styles.btn} width="300px">
              <p>View Courses</p>
            </Rounded>
          </motion.div>
          <motion.button
            className={styles.btn1}
            variants={buttonReveal} // Button reveal animation for "Contact Us"
            initial="initial"
            animate={isButtonInView ? "open" : "initial"}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </div>
  );
}
