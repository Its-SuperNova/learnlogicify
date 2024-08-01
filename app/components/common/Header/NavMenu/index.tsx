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
            <Link href="/Company/AboutUs">About Us</Link>
          </li>
          <li>
            <Link href="/Company/Team">Team</Link>
          </li>
          <li>
            <Link href="/Company/Portal">LMS Portal</Link>
          </li>
        </div>
      </div>
      <div className={styles.dropdown}>
        <li className={styles.gradientText}>Courses</li>
        <div className={styles.dropdownContent}>
          <li>
            <Link href="/Courses?tab=AllCourses">All Courses</Link>
          </li>
          <li>
            <Link href="/Courses?tab=AllBootcamps">All Bootcamps</Link>
          </li>
          <li>
            <Link href="/Courses?tab=CompanySpecific">Company Specific</Link>
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
