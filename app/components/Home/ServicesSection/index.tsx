import React from "react";
import styles from "./styles.module.css";
import RoundButton from "../../common/buttons/roundButton";

const ServicesSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        One platform, <br />
        endless opportunities.
      </h1>
      <p className={styles.desc}>
        At LearnLogicify Technologies, we are committed to accelerating tech
        careers by providing a comprehensive, cutting-edge learning platform.
        Whether you&apos;re a beginner or an advanced learner, our courses cover
        essential skills in web development, AI, and other emerging
        technologies. With expert trainers, real-world projects, and hands-on
        experience, we ensure that every learner can fast-track their career
        growth. Our platform offers unlimited potential for learning and
        innovation, enabling individuals to build their future faster.
      </p>
      <div className={styles.btnContainer}>
        <RoundButton type="submit" width="170px" height="50px">
          <p>Get Started</p>
        </RoundButton>
      </div>
    </div>
  );
};

export default ServicesSection;
