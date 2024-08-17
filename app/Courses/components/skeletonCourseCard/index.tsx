// components/SkeletonCourseCard.tsx
import React from "react";
import styles from "./styles.module.css";

const SkeletonCourseCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.banner}></div>
      <div className={styles.content}>
        <div className={styles.priceSection}>
          <div className={styles.offer}></div>
          <div className={styles.price}></div>
        </div>
        <div className={styles.button}></div>
      </div>
    </div>
  );
};

export default SkeletonCourseCard;
