"use client"
import React from "react";
import Image from "next/image";
import img from "@/public/images/people/Bob Iger Takes CEO Responsibilities Back from Chapek, Disney Company Downsizing Expected Once Dust Settles from Pandemic According to New York Times - WDW News Today - Copy.jpeg";
import styles from "./styles.module.css";

const LightLogo = () => {
  return (
    <div className={styles.imageWrapper}>
      <Image className={styles.img} src={img} alt="Sachin Nandha Sabarish" />
      <div className={styles.caption}>
        <div className={styles.captionText}>
          <div className={styles.name}>Sachin Nandha Sabarish J</div>
          <div className={styles.designation}>Founder & CEO</div>
        </div>
        <div className={styles.FlexKnowMore}>
          <div className={styles.knowMore}>
            Know More
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightLogo;
