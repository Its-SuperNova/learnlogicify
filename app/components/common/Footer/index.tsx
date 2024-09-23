import React from "react";
import styles from "./styles.module.css";
import Logo from "../../images/logo/darkLogo";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import {
  FaRegCopyright,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import SocialLink from "../SocialLinks";
import Link from "next/link";

interface FooterProps {
  className?: string; // Accepts className prop
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      {" "}
      {/* Merge className with styles.container */}
      <div className={styles.top}>
        {/* Section 1 - Left (Logo, Description, Social Media Links) */}
        <div className={styles.section1}>
          <Logo />
          <div className={styles.desc}>
            <p>
              Building futures with top-tier placement training and extensive
              programming courses.
            </p>
          </div>
          <div className={styles.socialMedia}>
            <SocialLink
              href="https://wa.me/yournumber"
              icon={<FaWhatsapp />}
              alt="WhatsApp"
            />
            <SocialLink
              href="https://www.instagram.com/yourprofile"
              icon={<FaInstagram />}
              alt="Instagram"
            />
            <SocialLink
              href="https://www.youtube.com/yourchannel"
              icon={<FaYoutube />}
              alt="YouTube"
            />
            <SocialLink
              href="https://www.linkedin.com/in/yourprofile"
              icon={<FaLinkedinIn />}
              alt="LinkedIn"
            />
          </div>
        </div>

        {/* Section 2 - Company Links */}
        <div className={styles.section2}>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/lms-portal">LMS Portal</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>

        {/* Section 3 - Courses Links */}
        <div className={styles.section3}>
          <h4>Courses</h4>
          <ul>
            <li>
              <Link href="/courses">All Courses</Link>
            </li>
            <li>
              <Link href="/bootcamps">All Bootcamps</Link>
            </li>
            <li>
              <Link href="/aptitude-courses">Aptitude Courses</Link>
            </li>
            <li>
              <Link href="/interview-preparations">Interview Preparations</Link>
            </li>
          </ul>
        </div>

        {/* Section 4 - Legal & Policies Links */}
        <div className={styles.section4}>
          <h4>Legal & Policies</h4>
          <ul>
            <li>
              <Link href="/legal?tab=terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/legal?tab=privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/legal?tab=refund">Refund Policy</Link>
            </li>
          </ul>
        </div>

        {/* Section 5 - Contact Details */}
        <div className={styles.section5}>
          <div className={styles.contactItem}>
            <IoMail size={20} className={styles.icon} />
            <span>help@learnlogicify.com</span>
          </div>
          <div className={styles.contactItem}>
            <FaPhone size={19} className={styles.icon} />
            <span>+91 89250 84608</span>
          </div>
          <div className={styles.contactItem}>
            <FaLocationDot size={20} className={styles.icon} />
            <span>
              LearnLogicify Technologies LLP,
              <br />
              Coimbatore, Tamilnadu - 641 602
            </span>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className={styles.bottom}>
        <div>
          <FaRegCopyright />
        </div>
        <p>
          2024{" "}
          <span className={styles.bold}>
            <Link href="/">LearnLogicify</Link>
          </span>{" "}
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
