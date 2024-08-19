import React from "react";
import styles from "./Styles.module.css";
import Card from "./card"
const OurTeam = () => {
  return (
    <section className={styles.container}>
      <section className={styles.Header}>
        <h2 className={styles.subHeading}>Our Team</h2>
        <h1 className={styles.title}>
          Meet Our <span className={styles.animatedGradient}>Leaders</span>
        </h1>
        <p className={styles.titleDesc}>
          Meet the talented individuals behind our success
        </p>
      </section>
      <section className={styles.content}>
        <Card/>
      </section>
    </section>
  );
};

export default OurTeam;
