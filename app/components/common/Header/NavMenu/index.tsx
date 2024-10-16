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
            <Link href="/Company/Team">Services</Link>
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
            <Link href="/CoursePage?tab=AllCourses">All Courses</Link>
          </li>
          <li>
            <Link href="/CoursePage?tab=AllBootcamps">All Bootcamps</Link>
          </li>
          <li>
            <Link href="/CoursePage?tab=CompanySpecific">Company Specific</Link>
          </li>
        </div>
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
