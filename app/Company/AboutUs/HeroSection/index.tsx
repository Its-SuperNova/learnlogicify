"use client"
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Styles.module.css";
import Link from "next/link";
import Rocket from "@/app/components/common/SVG/icons/rocket";

const HeroPage = () => {
  const { scrollY } = useScroll();
  const yDesc = useTransform(scrollY, [0, 300], [0, -30]);
  const yServiceNav = useTransform(scrollY, [0, 300], [0, -60]);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.div
      className={styles.main}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className={styles.container}>
        <motion.div className={styles.subtitle} variants={itemVariants}>
          About LearnLogicify Technologies
        </motion.div>
        <motion.div className={styles.title} variants={itemVariants}>
          <p>
            We build tomorrow's{" "}
            <span className={styles.animatedGradient}>Leaders</span> with
            quality <br />
            education and hands-on learning.
          </p>
        </motion.div>
        <motion.div
          className={styles.desc}
          style={{ y: yDesc }}
          variants={itemVariants}
        >
          <p>
            LearnLogicify empowers individuals with expert placement training
            and
            <br />
            comprehensive programming courses, bridging the gap between academic
            learning <br />
            and real-world application.
          </p>
        </motion.div>
        <motion.div
          className={styles.ServiceNav}
          style={{ y: yServiceNav }}
          variants={itemVariants}
        >
          <div className={styles.nav}>
            <div className={styles.rocket}>
              <Rocket />
            </div>
            <div>
              <p>
                You can also find our &nbsp;
                <span className={styles.bold}>
                  <Link href={"/Services"}>Services</Link>
                </span>
                &nbsp; to contact for the consulting.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroPage;
