import React from "react";
import styles from "./styles.module.css";
import MagicButton from "../../../common/buttons/magic-button";
import Link from "next/link";
const HeroHome = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.logo}>LearnLogicify Technologies</div>
          <h1 className={styles.title}>
            Accelerate the <span className={styles.highlight}>Tech Career</span>
            <br />
            and build your Future Faster
          </h1>
          <p className={styles.subtitle}>
            Discover a wide range of Programming courses tailored to enhance
            your skills.
          </p>
          <div className={styles.btn}>
            <Link href={"/courses"}>
              <MagicButton
                buttonText="View Courses"
                width="180px"
                height="50px"
                fontSize="14px"
              />
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.heroImage}
            src="/images/banner/portal.png"
            alt="Course preview"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
