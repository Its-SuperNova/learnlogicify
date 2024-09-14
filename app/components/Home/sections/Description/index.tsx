"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Correctly import motion from framer-motion
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../common/Animations/slideUpWord";
import FadeTransition from "../../../common/Animations/textFade";
import Rounded from "../../../common/buttons/roundButton";
import styles from "./styles.module.css";

export default function Index() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: buttonInViewRef, inView: isButtonInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const buttonParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const buttonElement = buttonParallaxRef.current;
      if (buttonElement) {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * 0.2;
        buttonElement.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const title = ["One Platform,", "endless opportunities."];
  const description =
    "At LearnLogicify Technologies, we are committed to accelerating tech careers by providing a comprehensive, cutting-edge learning platform. Whether you're a beginner or an advanced learner, our courses cover essential skills in web development, AI, and other emerging technologies";

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
        <Rounded className={styles.btn}>
          <p>Get Started</p>
        </Rounded>
      </div>

      <motion.div
        ref={buttonInViewRef}
        className={styles.buttonContainer}
        initial="initial"
        animate={isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div ref={buttonParallaxRef}>
          <Rounded className={styles.button}>
            <p>About Us</p>
          </Rounded>
        </div>
      </motion.div>
    </div>
  );
}
