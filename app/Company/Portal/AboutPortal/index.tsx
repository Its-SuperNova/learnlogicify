import React from "react";
import styles from "./Styles.module.css";
import Video from "./components/video section"; // Import the Video component

const AboutPortal = () => {
  return (
    <main className={styles.container}>
      <header>
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
      </section>
    </main>
  );
};

export default AboutPortal;
