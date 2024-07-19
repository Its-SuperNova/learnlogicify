"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";
import Spotlight from "../../common/buttons/spotlight"
import ProStar from "../SVG/icons/ProStar"
import Link from "next/link";
import LogoIcon from "../SVG/logo/ComanyIcon"
const Probanner = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.container}>
      <motion.div
        ref={ref}
        className={styles.banner}
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={styles.title}
        >
          <p className={styles.p}>All-Access Subscription</p>
          <div className={styles.star}>
            <ProStar />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={styles.desc}
        >
          <p>
            Unlock the full potential of your coding skills with our All Access
            Subscription. Gain unlimited access to all current and future
            courses, and explore the exclusive features of this membership.
            Become the best coder you can be with a wealth of resources at your
            fingertips.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className={styles.btn}
        >
          <Link href="/Pro">
            <Spotlight />
          </Link>
        </motion.div>
        <motion.div
          className={styles.circle_1}
          initial={{ y: -200, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className={styles.circle_2}
          initial={{ y: 200, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className={styles.icon}
          initial={{ y: -100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <LogoIcon />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Probanner;
