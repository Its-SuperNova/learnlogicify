"use client"
import React from "react";
import { useInView } from "react-intersection-observer"; // Correct import
import SlideUpWord from "../../../common/Animations/slideUpWord";
import FadeTransition from "../../../common/Animations/textFade";
import { motion } from "framer-motion";
import { buttonReveal } from "../../../common/Animations/animation";
import Rounded from "../../../common/buttons/roundButton";
import styles from "./styles.module.css";
import Link from "next/link";
const AboutPortal = () => {
  const { ref: titleRef, inView: isTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: descRef, inView: isDescInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: buttonRef, inView: isButtonInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["Your Gateway to Advanced Learning"];
  const description =
    "Explore our cutting-edge portal designed to elevate your tech skills. With expert-led tutorials, hands-on modules, and personalized learning paths, our platform empowers you to master the latest industry tools and technologies. Unlock your potential and accelerate your career with ease.";

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div ref={titleRef}>
          <SlideUpWord
            title={title}
            isInView={isTitleInView}
            className={styles.title}
          />
        </div>
        <div ref={descRef}>
          <FadeTransition
            description={description}
            isInView={isDescInView}
            className={styles.description}
          />
        </div>
        <div ref={buttonRef} className={styles.btnContainer}>
          <motion.div
            variants={buttonReveal}
            initial="initial"
            animate={isButtonInView ? "open" : "initial"}
          >
            <Link href={"/company/portal"}>
              <Rounded className={styles.btn}>
                <p>About Portal</p>
              </Rounded>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className={styles.right}>
        <video
          src="MP4/video1.mp4"
          className={styles.video}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default AboutPortal;
