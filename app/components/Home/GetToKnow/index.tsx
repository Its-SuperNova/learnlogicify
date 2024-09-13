"use client";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../common/Animations/slideUpWord";
import FadeTransition from "../../common/Animations/textFade";
import { motion } from "framer-motion";
import {
  gridSlideUp,
  gridFadeIn,
  buttonReveal,
} from "../../common/Animations/animation";
import Rounded from "../../common/buttons/roundButton";
import styles from "./styles.module.css"; // CSS Modules

export default function GetToKnow() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: gridRef, inView: isGridInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Change triggerOnce to false to trigger every time the button enters the viewport
  const { ref: buttonRef, inView: isButtonInView } = useInView({
    triggerOnce: false, // Trigger the animation every time the button enters the viewport
    threshold: 0.1,
  });

  const title = ["Get to Know About Us"];
  const description =
    "At LearnLogicify Technologies, we are dedicated to empowering individuals to achieve success in the tech industry through innovative and accessible learning solutions. Our platform bridges the gap between theoretical knowledge and real-world application, offering expertly crafted courses, hands-on projects, and tailored assessments.";

  return (
    <div ref={descriptionRef} className={styles.getToKnow}>
      <div className={styles.body}>
        <SlideUpWord
          title={title}
          isInView={isInView}
          className={styles.title}
        />
        <FadeTransition
          description={description}
          isInView={isInView}
          className={styles.descriptionText}
        />

        <div ref={gridRef} className={styles.gridSection}>
          <motion.div
            className={styles.gridItem}
            variants={gridSlideUp}
            initial="initial"
            animate={isGridInView ? "open" : "initial"}
          >
            <motion.h2
              variants={gridSlideUp}
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              Comprehensive Learning
            </motion.h2>
            <motion.p
              variants={gridFadeIn}
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
            variants={gridSlideUp}
            initial="initial"
            animate={isGridInView ? "open" : "initial"}
          >
            <motion.h2
              variants={gridSlideUp}
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              Expert Guidance
            </motion.h2>
            <motion.p
              variants={gridFadeIn}
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              Learn from industry professionals with practical insights and
              experience, helping you gain real-world knowledge and skills.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.gridItem}
            variants={gridSlideUp}
            initial="initial"
            animate={isGridInView ? "open" : "initial"}
          >
            <motion.h2
              variants={gridSlideUp}
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              Career Focused
            </motion.h2>
            <motion.p
              variants={gridFadeIn}
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              Our programs equip you with the certifications and skills needed
              to thrive in the tech world and build a strong career foundation.
            </motion.p>
          </motion.div>
        </div>

        {/* Apply button reveal animation */}
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

          <motion.div
            variants={buttonReveal} // Button reveal animation for "Contact Us"
            initial="initial"
            animate={isButtonInView ? "open" : "initial"}
          >
            <motion.button className={styles.btn1}>Contact Us</motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
