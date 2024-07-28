import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link';
import Accenture from '../svg/Accenture';
const card = () => {
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
        <Accenture />
      </div>
    </div>
  );
}

export default card
