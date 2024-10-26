"use client";
import React from "react";
import styles from "./styles.module.css";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../../components/common/Animations/slideUpWord";
import FadeTransition from "../../../../components/common/Animations/textFade";
import { motion } from "framer-motion";
import { buttonReveal } from "../../../../components/common/Animations/animation";
import Rounded from "../../../../components/common/buttons/roundButton";
import Link from "next/link";
import Image from "next/image";
const OurVision = () => {
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

  const title = ["Our Vision"];
  const descriptionPart1 = `
  At LearnLogicify Technologies LLP, we envision a world where every individual, regardless of background, has the opportunity to reach their fullest potential and pursue their aspirations confidently. Our mission is to bridge the gap between traditional academic learning and practical, real-world applications.
`;

  const descriptionPart2 = `
  By providing students with industry-relevant skills, hands-on experience, and a supportive learning environment, we empower them to navigate and excel in today's competitive job market. We are committed to equipping our learners with the tools, knowledge, and confidence necessary to thrive and make meaningful contributions to their chosen fields.
`;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/team/sachin-x-1.jpg"
            alt="About Portal Illustration"
            width={600}
            height={500}
            className={styles.responsiveImage}
          />
          <div className={styles.overlay}>
            <div className={styles.para}>
              <p className={styles.overlayText}>Sachin Nandha Sabarish J</p>
              <p className={styles.overlaySubText}>Founder & CEO</p>
            </div>
            <div className={styles.link}>
              <Link href="/about" className={styles.overlayButton}>
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div ref={titleRef}>
          <SlideUpWord
            title={title}
            isInView={isTitleInView}
            className={styles.title}
          />
        </div>
        <div ref={descRef} className={styles.desc}>
          <FadeTransition
            description={descriptionPart1}
            isInView={isDescInView}
            className={styles.description1}
          />
          <FadeTransition
            description={descriptionPart2}
            isInView={isDescInView}
            className={styles.description2}
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
