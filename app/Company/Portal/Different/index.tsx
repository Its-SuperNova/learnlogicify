import React from "react";
import styles from "./Styles.module.css";
import Img1 from "@/public/images/banner/in-depth.jpg";
import Img2 from "@/public/images/banner/animated-video.jpg";
import Img3 from "@/public/images/banner/assessment.jpg";

const Different = () => {
  return (
    <main className={styles.container}>
      <header>
        <h1 className={styles.title}>
          What makes us 
          <span className={styles.animatedGradient}>Different</span>
        </h1>
        <section className={styles.content}>
          <div className={styles.card1}>
            <h2 className={styles.cardTitle}>In&#45;Depth Understanding</h2>
            <p className={styles.desc}>
              Explore a profound grasp of programming fundamentals, tailored to
              simplify complex concepts for effective learning.
            </p>
            <img
              src={Img1.src}
              alt="In-Depth Understanding"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.card2}>
            <h2 className={styles.cardTitle}>
              Engaging <br /> animated Videos
            </h2>
            <p className={styles.desc}>
              Dive into captivating animated tutorials, bringing programming
              concepts to life and making learning a delight.
            </p>
            <img
              src={Img2.src}
              alt="Engaging Animated Videos"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.card3}>
            <h2 className={styles.cardTitle}>
              Weekly <br />
              Assessment
            </h2>
            <p className={styles.desc}>
              Take part in weekly assessments that measure your progress,
              solidifying your coding skills and driving continuous improvement.
            </p>
            <img
              src={Img3.src}
              alt="Weekly Assessment"
              className={styles.cardImage}
            />
          </div>
        </section>
      </header>
    </main>
  );
};

export default Different;
