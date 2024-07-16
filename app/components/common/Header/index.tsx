import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
          <div className={styles.nav}>
            <div className={styles.dropdown}>
              <li className={styles.gradientText}>Company</li>
              <div className={styles.dropdownContent}>
                <li>
                  <Link href="Company/AboutUs">About Us</Link>
                </li>
                <li>
                  <Link href="Company/Team">Team</Link>
                </li>
                <li>
                  <Link href="Company/Portal">LMS Portal</Link>
                </li>
              </div>
            </div>
            <div className={styles.dropdown}>
              <li className={styles.gradientText}>Courses</li>
              <div className={styles.dropdownContent}>
                <li>
                  <Link href="Courses/AllCourses">All Courses</Link>
                </li>
                <li>
                  <Link href="Courses/AllBootcamps">All Bootcamps</Link>
                </li>
                <li>
                  <Link href="Courses/CompanySpecific">Company Specific</Link>
                </li>
                <li>
                  <Link href="Courses/AptitudeCourses">Aptitude Courses</Link>
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
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Header;
