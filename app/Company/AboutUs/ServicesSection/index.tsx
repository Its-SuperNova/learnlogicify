"use client";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";
import LightLogo from "../../../components/images/People/Sachin/image_1";

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
          <LightLogo />
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
          <div className={styles.desc}>
            At LearnLogicify Technologies LLP, we envision a world where every
            individual has the opportunity to achieve their fullest potential.
            Our goal is to bridge the gap between academic learning and
            real-world application by offering comprehensive training programs
            and courses. We are dedicated to providing students with the tools,
            skills, and confidence needed to thrive in today’s competitive job
            market. <br />
            <br />
            Through our placement training, technical courses, and personalized
            support, we strive to ensure that every learner is well-prepared to
            meet the challenges and seize the opportunities of their chosen
            career paths. We believe in empowering our students not just with
            knowledge, but with practical experience and the ability to apply
            what they’ve learned in meaningful ways.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
