import React from "react";
import styles from "./styles.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.profile} src="images/students/s1.jpg" alt="" />
        <div className={styles.content}>
          <p className={styles.feed}>
            LearnLogicify is fantastic! The courses are well-structured, and the
            platform is super easy to navigate. I've gained valuable tech
            skills, and the hands-on exercises really boosted my confidence.
            Highly recommend!
          </p>
          <p className={styles.name}>Arun Kumar</p>
          <p className={styles.role}>Student</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
