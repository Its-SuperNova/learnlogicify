import React from 'react'
import styles from "./styles.module.css";
import Spotlight from "@/app/components/common/buttons/spotlightM";
import ProStar from "@/app/components/common/SVG/icons/ProStar";
import Link from "next/link";
import LogoIcon from "@/app/components/common/SVG/logo/ComanyIcon";

const probanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.icon}>
          <LogoIcon />
        </div>
        <div className={styles.header}>
          <div className={styles.title}>Go Premium</div>
          <div className={styles.star}>
            <ProStar />
          </div>
        </div>
        <div className={styles.desc}>
          Unlock the full potential of your coding skills with our All Access
          Subscription. Gain unlimited access to all current and future courses,
          and explore the exclusive features of this membership. Become the best
          coder you can be with a wealth of resources at your fingertips.
        </div>
        <div className={styles.btn}>
            <Link href={"/pricing"} passHref>
              <Spotlight />
            </Link>

        </div>
      </div>
      <div className={styles.circle_1}></div>
      <div className={styles.circle_2}></div>
    </div>
  );
}

export default probanner
