"use client";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";

const ServicesSection = () => {
  const controlsContent = useAnimation();
  const controlsImg = useAnimation();
  const [refContent, inViewContent] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [refImg, inViewImg] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    const handleResize = () => {
      if (inViewContent) {
        controlsContent.start({
          opacity: 1,
          transition: { ease: "easeInOut", duration: 1.5, delay: 0.5 },
        });
      } else {
        controlsContent.start({
          opacity: 0,
          transition: { ease: "easeInOut", duration: 1.5, delay: 0.5 },
        });
      }

      if (inViewImg) {
        controlsImg.start({
          opacity: 1,
          transition: { ease: "easeInOut", duration: 1.5, delay: 0.3 },
        });
      } else {
        controlsImg.start({
          opacity: 0,
          transition: { ease: "easeInOut", duration: 1.5, delay: 0.3 },
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [controlsContent, controlsImg, inViewContent, inViewImg]);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <motion.div
          ref={refImg}
          initial={{ opacity: 0 }}
          animate={controlsImg}
          className={styles.img}
        >
        </motion.div>
        <motion.div
          ref={refContent}
          initial={{ opacity: 0 }}
          animate={controlsContent}
          className={styles.content}
        >
          <div className={styles.title}>
            Our <span className={styles.animatedGradient}>Vision</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
