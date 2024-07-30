import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Accenture from "../svg/Accenture";
import AccentureMobile from "../svg/AccentureMobile";
import { useMediaQuery } from "react-responsive";

const Card = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 512px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 700px) and (max-width: 830px)",
  });

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.header}>
          <p>Accenture Mock Test Series</p>
        </div>
        <div className={styles.desc}>
          <p>
            Prepare for Accenture placements with our mock test series to
            enhance your skills to secure your dream job at Accenture.
          </p>
        </div>
        <div className={styles.content}>
          <div>
            <Link href="/">
              <div className={styles.btn}>Buy</div>
            </Link>
          </div>
          <div>
            <div className={styles.offer}>42% OFF</div>
            <div className={styles.price}>
              <div className={styles.offprice}>999</div>
              <div className={styles.originalPrice}>
                <s>1499</s>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {isMobile || isTablet ? <AccentureMobile /> : <Accenture />}
      </div>
    </div>
  );
};

export default Card;
