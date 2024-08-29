"use client";
import React from "react";
import styles from "./Styles.module.css";
import Video from "./components/video section";
import CodeIcon from "@/public/SVG/icons/code.svg";
import BarIcon from "@/public/SVG/icons/bar.svg";
import GraphIcon from "@/public/SVG/icons/graph.svg";
import { GiCircle } from "react-icons/gi";
import { GiSquare } from "react-icons/gi";
import Lottie from "lottie-react";
import GearAnimation from "@/public/SVG/icons/gear.json";

const AboutPortal = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.subtitle}>
          <span className={styles.animatedGradient}>
            Welcome to Your LearnLogicify LMS Portal
          </span>
        </h2>
        <h1 className={styles.title}>
          Discover How You Can Learn with Personalized Dashboards, Interactive
          Modules, and Engaging Animated Videos.
        </h1>
      </header>
      <section className={styles.content}>
        <div className={styles.videoContainer}>
          <Video
            src="/website-intro (1).mp4"
            poster="/images/thumbnail/image.png"
            controls={true}
            loop={false}
            muted={false}
          />
        </div>
        <div className={styles.background}>
          <img
            src={CodeIcon.src}
            alt="Code Icon"
            className={`${styles.icon} ${styles.icon1}`}
          />
          <img
            src={BarIcon.src}
            alt="Bar Icon"
            className={`${styles.icon} ${styles.icon2}`}
          />
          <img
            src={GraphIcon.src}
            alt="Graph Icon"
            className={`${styles.icon} ${styles.icon3}`}
          />
          <GiCircle className={`${styles.icon} ${styles.icon4}`} />
          <GiSquare className={`${styles.icon} ${styles.icon5}`} />
          <div className={`${styles.icon} ${styles.icon6}`}>
            <Lottie animationData={GearAnimation} loop={true} />
          </div>
        </div>
      </section>
      <section className={styles.desc}>
        <p>
          The LearnLogicify LMS Portal offers personalized dashboards,
          interactive modules, and a built-in compiler for hands-on practice.
          Each course includes detailed notes and engaging animated videos to
          simplify complex concepts. With comprehensive resources at your
          fingertips, you&apos;ll be well-equipped to excel in your studies and
          career.
        </p>
      </section>
    </main>
  );
};

export default AboutPortal;
