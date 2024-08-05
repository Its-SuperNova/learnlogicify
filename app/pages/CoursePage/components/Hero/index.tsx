import React from "react";
import styles from "./styles.module.css";
import { FaStar } from "react-icons/fa6";
import Overview from "../../../common/OverviewCard";
import VideoSection from "../../../common/VideoSection";
import Link from "next/link";
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p>Basic Python For Beginner</p>
        </div>
        <div className={styles.Hstats}>
          <div className={styles.tutor}>
            <p>Sachin</p>
          </div>
          <div className={styles.star}>
            <FaStar color="#FFD600" />
          </div>
          <div className={styles.rating}>
            <p className={styles.rate}>4.9</p>
            <p className={styles.rates}>(5.2k Ratings)</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.overview}>
          <Overview />
        </div>
        <div className={styles.video}></div>
      </div>
      <div className={styles.about}>
        <div className={styles.AbtTitle}>About This Course</div>
        <p className={styles.Abtdesc}>
          The Basic Python course is designed for beginners with no prior
          programming experience. You'll learn the fundamental concepts of
          Python, including syntax, data types, variables, and control
          structures. Our course features engaging lessons, exclusive videos,
          and hands-on exercises through our LMS portal, where you can run and
          execute problems in real-time. At the end of the course, you'll take a
          final exam and receive a certificate with your scored marks. You'll
          have a solid foundation to build upon for more advanced Python topics.
        </p>
      </div>
      <div className={styles.about}>
        <div className={styles.AbtTitle}>Pre-requisites for this Course</div>
        <p className={styles.Abtdesc}>
          This basic Python course has no pre-requisites, making it ideal for
          beginners with no programming experience. However, if you know some C
          programming, you'll find it easier to understand how Python works
          behind the scenes.Don't worry if you're new—we'll guide you through
          Python's features and syntax from scratch.
        </p>
        <p className={styles.Abtdesc}>
          If you're interested in gaining some C programming knowledge
          beforehand, feel free to explore our{" "}
          <Link href={"/Courses"} className={styles.link}>
            Basic C Programming
          </Link>{" "}
          Course.
        </p>
      </div>
    </div>
  );
};

export default Hero;
