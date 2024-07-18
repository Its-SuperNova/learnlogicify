import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide, slide, scale } from '../anim';
import Link from 'next/link';
import Curve from './Curve';
import Footer from './Footer';
import LightLogo from '../../images/darkLogo';
import { Icon } from '@iconify/react';

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [companySubMenuOpen, setCompanySubMenuOpen] = useState(false);
  const [coursesSubMenuOpen, setCoursesSubMenuOpen] = useState(false);

  const toggleSubMenu = (menu) => {
    if (menu === 'company') {
      setCompanySubMenuOpen(!companySubMenuOpen);
    } else if (menu === 'courses') {
      setCoursesSubMenuOpen(!coursesSubMenuOpen);
    }
  };

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
          <div className={styles.header}>
            <LightLogo />
          </div>
          <motion.div className={styles.link} onMouseEnter={() => { setSelectedIndicator("/") }} custom={"1"} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} animate={(selectedIndicator === "/") ? "open" : "closed"} className={styles.indicator}></motion.div>
            <Link href="/">Home</Link>
          </motion.div>
          <motion.div className={styles.link} onClick={() => toggleSubMenu('company')} onMouseEnter={() => { setSelectedIndicator("/Company") }} custom={"2"} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} animate={(selectedIndicator.startsWith("/Company")) ? "open" : "closed"} className={styles.indicator}></motion.div>
            <div className={styles.menuItem}>
              <span>Company</span>
              <Icon icon="lucide:chevron-down" width="24" height="24" className={companySubMenuOpen ? styles.rotate : ''} />
            </div>
          </motion.div>
          {companySubMenuOpen && (
            <div className={styles.subMenu}>
              <Link href="/Company/AboutUs">About Us</Link>
              <Link href="/Company/Team">Team</Link>
              <Link href="/Company/Portal">Portal</Link>
            </div>
          )}
          <motion.div className={styles.link} onClick={() => toggleSubMenu('courses')} onMouseEnter={() => { setSelectedIndicator("/Courses") }} custom={"3"} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} animate={(selectedIndicator.startsWith("/Courses")) ? "open" : "closed"} className={styles.indicator}></motion.div>
            <div className={styles.menuItem}>
              <span>Courses</span>
              <Icon icon="lucide:chevron-down" width="24" height="24" className={coursesSubMenuOpen ? styles.rotate : ''} />
            </div>
          </motion.div>
          {coursesSubMenuOpen && (
            <div className={styles.subMenu}>
              <Link href="/Courses/AllCourses">All Courses</Link>
              <Link href="/Courses/AllBootcamps">All Bootcamps</Link>
              <Link href="/Courses/CompanySpecific">Company Specific</Link>
              <Link href="/Courses/AptitudeCourses">Aptitude Courses</Link>
            </div>
          )}
          <motion.div className={styles.link} onMouseEnter={() => { setSelectedIndicator("/Services") }} custom={"4"} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} animate={(selectedIndicator === "/Services") ? "open" : "closed"} className={styles.indicator}></motion.div>
            <Link href="/Services">Services</Link>
          </motion.div>
          <motion.div className={styles.link} onMouseEnter={() => { setSelectedIndicator("/Contact") }} custom={"5"} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} animate={(selectedIndicator === "/Contact") ? "open" : "closed"} className={styles.indicator}></motion.div>
            <Link href="/Contact">Contact</Link>
          </motion.div>
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
