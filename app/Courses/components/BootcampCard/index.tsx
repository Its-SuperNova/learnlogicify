// components/BootcampCard.tsx
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { IconType } from "react-icons";
import { PiPuzzlePieceFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";

interface Props {
  icon: IconType;
  title: string;
  Problems: number;
  Courses: number;
  desc: string;
  offer: string;
  price: string;
  originalPrice: string;
  bannerColor: string;
}

const BootcampCard = (props: Props) => {
  const {
    icon: Icon,
    title,
    Problems,
    Courses,
    desc,
    offer,
    price,
    originalPrice,
    bannerColor,
  } = props;

  return (
    <div className={styles.card} style={{ backgroundColor: bannerColor }}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.icon}>
          <Icon />
        </div>
      </div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.stats}>
        <div className={styles.Problems}>
          <PiPuzzlePieceFill />
          <p className={styles.p}>{Problems}+ Problems</p>
        </div>
        <div className={styles.Courses}>
          <FaGraduationCap />
          <p className={styles.p}>{Courses} Courses</p>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <div className={styles.offer}>{offer}</div>
          <div className={styles.price}>
            <div className={styles.offprice}>{price}</div>
            <div className={styles.originalPrice}>
              <s>{originalPrice}</s>
            </div>
          </div>
        </div>
        <div>
          <Link href="/">
            <div className={styles.btn}>Buy</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BootcampCard;
