"use client";
import React from "react";
import styles from "./styles.module.css";
import {FaInstagram, FaLinkedinIn, FaWhatsapp , } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
const Popup = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoCloseOutline size={35} />
        </button>
        <div className={styles.content}>
          <div className={styles.left}>
            <img
              src="/images/team/sachin x.png"
              alt="Profile Image"
              className={styles.profileImage}
            />
            <div className={styles.socialIcons}>
              <div className={styles.iconI}>
                <FaInstagram size={20} />
              </div>
              <div className={styles.iconL}>
                <FaLinkedinIn size={20} />
              </div>
              <div className={styles.iconW}>
                <FaWhatsapp size={20} />
              </div>
              <div className={styles.iconG}>
                <SiGmail size={20} />
              </div>
            </div>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.name}>Sachin Nandha Sabarish J</h2>
            <p className={styles.role}>Founder & CEO</p>
            <p>
              Began his career as a Microsoft Integration Architect in London,
              UK in 2010. For the next 10 years, he specialized in a single
              technology—BizTalk. He worked as a BizTalk consultant for various
              top firms in the world like Accenture, Fidelity and Microsoft
              itself briefly, before he identified a gap in the BizTalk
              technology. His clients were facing the same issues and Microsoft
              had stopped focussing on the BizTalk server. <br />
              <br /> Passionate about coding and building new products, Saravana
              in 2010 began building a software product that addresses all the
              gaps in the BizTalk server. A year later he demonstrated a
              prototype of the product at annual Microsoft conference in
              Seattle. People were blown off by the product’s potential. He then
              took all their feedback, polished it further and three months
              later released the product calling it BizTalk360.Saravana has
              grown the single-person product entity to a multiproduct, 290+
              member organization with an ARR of $10 million, functioning out of
              London, UK, and Coimbatore, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
