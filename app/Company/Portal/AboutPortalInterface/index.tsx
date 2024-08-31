"use client";
import React from "react";
import styles from "./Styles.module.css";
import Lottie from "lottie-react";
import VideoTutorial from "@/public/json/portal/video-tutorial.json";
import Module from "@/public/json/portal/module.json";
import Test from "@/public/json/portal/test.json";
import Support from "@/public/json/portal/support.json";

const AboutPortalInterface = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>LearnLogicify Portal Benefits</h1>
          <h2 className={styles.subtitle}>
            Unlock the Full Potential of Your Learning Journey
          </h2>
        </header>
        <section className={styles.cardContainer}>
          <div className={styles.card}>
            <Lottie
              animationData={VideoTutorial}
              loop={true}
              className={styles.icon}
            />
            <h3 className={styles.cardTitle}>High-Quality Tutorial Videos</h3>
            <p className={styles.desc}>
              Expert-led videos offering in-depth explanations and practical
              examples.
            </p>
          </div>
          <div className={styles.card}>
            <Lottie
              animationData={Module}
              loop={true}
              className={styles.icon1}
            />
            <h3 className={styles.cardTitle}>Interactive Learning Modules</h3>
            <p className={styles.desc}>
              Engage with dynamic modules featuring hands-on exercises and
              quizzes.
            </p>
          </div>
          <div className={styles.card}>
            <Lottie animationData={Test} loop={true} className={styles.icon2} />
            <h3 className={styles.cardTitle}>Comprehensive Assessments</h3>
            <p className={styles.desc}>
              Test your knowledge with detailed feedback and challenging
              assessments.
            </p>
          </div>
          <div className={styles.card}>
            <Lottie
              animationData={Support}
              loop={true}
              className={styles.icon}
            />
            <h3 className={styles.cardTitle}>Dedicated Support Team</h3>
            <p className={styles.desc}>
              Get prompt assistance from our reliable and responsive support
              team.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPortalInterface;
