"use client";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../../components/common/Animations/slideUpWord";
import FadeTransition from "../../../../components/common/Animations/textFade";
import { motion } from "framer-motion";
import {
  gridSlideUp,
  gridFadeIn,
  buttonReveal,
} from "../../../../components/common/Animations/animation";
import Rounded from "../../../../components/common/buttons/roundButton";
import styles from "./styles.module.css"; // CSS Modules

import Link from "next/link";
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


        {/* Apply button reveal animation */}
        <div ref={buttonRef} className={styles.btnContainer}>
          <motion.div
            variants={buttonReveal} // Button reveal animation for "View Courses"
            initial="initial"
            animate={isButtonInView ? "open" : "initial"}
          >
            <Link href={"/courses"}>
              <Rounded className={styles.btn} width="300px">
                <p>View Courses</p>
              </Rounded>
            </Link>
          </motion.div>

          <motion.div
            variants={buttonReveal} // Button reveal animation for "Contact Us"
            initial="initial"
            animate={isButtonInView ? "open" : "initial"}
          >
            <Link href={"/contact"}>
              <motion.button className={styles.btn1}>Contact Us</motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
