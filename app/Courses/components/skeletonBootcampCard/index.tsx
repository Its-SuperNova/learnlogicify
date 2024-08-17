// components/SkeletonBootcampCard.tsx
import React from "react";
import styles from "./styles.module.css";

const SkeletonBootcampCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}></div>
        <div className={styles.icon}></div>
      </div>
      <div className={styles.desc}></div>
      <div className={styles.stats}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
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

export default SkeletonBootcampCard;
