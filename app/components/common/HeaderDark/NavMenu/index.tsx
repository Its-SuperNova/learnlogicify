import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.dropdown}>
        <li className={styles.gradientText}>Company</li>
        <div className={styles.dropdownContent}>
          <li>
            <Link href="/company/About">About Us</Link>
          </li>
          <li>
            <Link href="/company/Team">Team</Link>
          </li>
          <li>
            <Link href="/company/Portal">LMS Portal</Link>
          </li>
        </div>
      </div>
      <div className={styles.dropdown}>
        <li className={styles.gradientText}>Courses</li>
        <div className={styles.dropdownContent}>
          <li>
            <Link href="/Courses">All Courses</Link>
          </li>
          <li>
            <Link href="/Courses">All Bootcamps</Link>
          </li>
          <li>
            <Link href="/Courses">Company Specific</Link>
          </li>
        </div>
      </div>
      <div>
        <li className={styles.gradientText}>
          <Link href={"/Services"}>Services</Link>
        </li>
      </div>
      <div>
        <li className={styles.gradientText}>
          <Link href={"/Contact"}>Contact</Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
