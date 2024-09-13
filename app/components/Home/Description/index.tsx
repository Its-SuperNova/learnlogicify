"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import motion for the button animation
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../common/Animations/slideUpWord";
import FadeTransition from "../../common/Animations/textFade";
import Rounded from "../../common/buttons/roundButton";
import styles from "./styles.module.css";

export default function Index() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: getStartedRef, inView: isGetStartedInView } = useInView({
    triggerOnce: false, // Trigger the animation every time it's in view
    threshold: 0.1,
  });

  const buttonParallaxRef = useRef<HTMLDivElement>(null);

  // Parallax effect logic for the "About Us" button
  useEffect(() => {
    const handleScroll = () => {
      const buttonElement = buttonParallaxRef.current;
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

  const title = ["One Platform,", "endless opportunities."];
  const description =
    "At LearnLogicify Technologies, we are committed to accelerating tech careers by providing a comprehensive, cutting-edge learning platform. Whether you're a beginner or an advanced learner, our courses cover essential skills in web development, AI, and other emerging technologies.";

  return (
    <div ref={descriptionRef} className={styles.description}>
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

        {/* Apply button reveal animation to "Get Started" */}
        <motion.div
          ref={getStartedRef}
          initial="hidden"
          animate={isGetStartedInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <Rounded className={styles.btn}>
            <p>Get Started</p>
          </Rounded>
        </motion.div>
      </div>

      {/* Apply only the parallax effect to the "About Us" button */}
      <div ref={buttonParallaxRef} className={styles.buttonContainer}>
        <Rounded className={styles.button}>
          <p>About Us</p>
        </Rounded>
      </div>
    </div>
  );
}
