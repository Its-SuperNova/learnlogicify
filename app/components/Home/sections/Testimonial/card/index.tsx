import React from "react";
import styles from "./styles.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.profile} src="images/students/s1.jpg" alt="" />
        <div className={styles.content}>
          <p className={styles.feed}>
            LearnLogicify is fantastic&#33; The courses are well&#45;structured,
            and the platform is super easy to navigate. I&#39;ve gained valuable
            tech skills, and the hands&#45;on exercises really boosted my
            confidence. Highly recommend&#33;
          </p>
          <p className={styles.name}>Arun Kumar</p>
          <p className={styles.role}>Student</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
