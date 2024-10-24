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
            <Link href="/company/about">About Us</Link>
          </li>
          <li>
            <Link href="/company/team">Team</Link>
          </li>
          <li>
            <Link href="/company/portal">LMS Portal</Link>
          </li>
        </div>
      </div>
      <div className={styles.dropdown}>
        <li className={styles.gradientText}>Courses</li>
        <div className={styles.dropdownContent}>
          <li>
            <Link href="/courses">All Courses</Link>
          </li>
          <li>
            <Link href="/courses">All Bootcamps</Link>
          </li>
          <li>
            <Link href="/courses">Company Specific</Link>
          </li>
        </div>
      </div>
      <div>
        <li className={styles.gradientText}>
          <Link href={"/services"}>Services</Link>
        </li>
      </div>
      <div>
        <li className={styles.gradientText}>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
