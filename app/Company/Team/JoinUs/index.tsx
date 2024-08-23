import React from "react";
import styles from "./Styles.module.css";
import Button from "@/app/components/common/buttons/magic-button";

const JoinUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          We are looking for{" "}
          <span className={styles.animatedGradient}>Talented</span> People
        </h1>
        <p className={styles.desc}>
          Join our team at LearnLogicify Technologies LLP! We’re seeking
          passionate individuals who are eager to innovate, educate, and make a
          difference in the tech industry. If you love working in a creative
          environment and want to grow your career, this is the place for you.
          Be part of a team that values knowledge, innovation, and positive
          change. Let’s shape the future together!
        </p>
        <Button />
      </div>
      <img
        src="/images/banner/Frame 11.png"
        alt=""
        className={styles.bannerImage}
      />
    </div>
  );
};

export default JoinUs;
