"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Correctly import motion from framer-motion
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../common/Animations/slideUpWord";
import FadeTransition from "../../../common/Animations/textFade";
import Rounded from "../../../common/buttons/roundButton";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Index() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const buttonParallaxRef = useRef<HTMLDivElement>(null);
  const [offsetMultiplier, setOffsetMultiplier] = useState(0.2); // Default for larger screens

  useEffect(() => {
    // Update the offsetMultiplier based on window size
    const updateOffsetMultiplier = () => {
      if (window.innerWidth < 730) {
        setOffsetMultiplier(0.1); // Mild parallax effect on mobile
      } else {
        setOffsetMultiplier(0.2); // Original effect for larger screens
      }
    };

    // Initial check
    updateOffsetMultiplier();

    // Event listener for window resize
    window.addEventListener("resize", updateOffsetMultiplier);
    return () => {
      window.removeEventListener("resize", updateOffsetMultiplier);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const buttonElement = buttonParallaxRef.current;
      if (buttonElement) {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * offsetMultiplier;
        buttonElement.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetMultiplier]); // Include offsetMultiplier as a dependency

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
        <Link href={"https://learnlogicify.com/login/index.php"}>
          <Rounded className={styles.btn}>
            <p>Get Started</p>
          </Rounded>
        </Link>
      </div>

      <div className={styles.buttonContainer}>
        <div ref={buttonParallaxRef}>
          <Link href={"/company/about"}>
            <Rounded className={styles.button}>
              <p>About Us</p>
            </Rounded>
          </Link>
        </div>
      </div>
    </div>
  );
}
