import React from "react";
import styles from "./styles.module.css";
import { IoLogoPython } from "react-icons/io5";
import Link from "next/link";

import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { PiSidebarFill } from "react-icons/pi";
import { FaClosedCaptioning } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
const overview = () => {
  return (
    <div className={styles.card}>
      <div className={styles.banner}>
        <div className={styles.header}>
          <div className={styles.title}>Course Overview</div>
          <div className={styles.icon}>
            <IoLogoPython size={25} />
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.list}>
            <div className={styles.sicon}>
              <BiSolidBarChartAlt2 size={22} />
            </div>
            <div>
              <p>Beginner</p>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.sicon}>
              <IoPlayCircleOutline size={22} />
            </div>
            <div>
              <p>12 hours of HD video</p>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.sicon}>
              <FaBook size={18} />
            </div>
            <div>
              <p>20 topics</p>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.sicon}>
              <IoExtensionPuzzleSharp size={22} />
            </div>
            <div>
              <p>200+ Problems</p>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.sicon}>
              <PiSidebarFill size={22} />
            </div>
            <div>
              <p>Portal Access</p>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.sicon}>
              <FaClosedCaptioning size={20} />
            </div>
            <div>
              <p>English Captions</p>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.sicon}>
              <PiCertificate size={22} />
            </div>
            <div>
              <p>Certificate of completion</p>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.sicon}>
              <MdOutlineAccessTimeFilled size={22} />
            </div>
            <div>
              <p>6 Months</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <div className={styles.offer}>42% OFF</div>
          <div className={styles.price}>
            <div className={styles.offprice}>₹999</div>
            <div className={styles.originalPrice}>
              <s>₹1499</s>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <Link href="/">
            <div className={styles.EnqBtn}>Enquire</div>
          </Link>
          <Link href="/">
            <div className={styles.BuyBtn}>Buy</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default overview;
