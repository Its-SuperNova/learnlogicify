"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import Popup from "../popup"; // Import the Popup component

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={styles.card} onClick={toggleModal}>
        <img
          src="/images/team/sachin x.png"
          alt="Profile Image"
          className={styles.profileImage}
        />
        <div className={styles.popup}>
          <p>Designing & Digital Marketing Head</p>
          <div className={styles.arrow}>
            <FaArrowRight />
          </div>
        </div>
        <div
          className={`${styles.icon} ${isOpen ? styles.clicked : ""}`}
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click from triggering the modal
            toggleIcon();
          }}
        >
          <div className={styles.btnIcon}>+</div>
          <div
            className={styles.socialIcons}
            style={{
              maxHeight: isOpen ? "200px" : "0",
              opacity: isOpen ? 1 : 0,
              visibility: isOpen ? "visible" : "hidden",
            }}
          >
            <FaInstagram className={styles.iconStyle} />
            <FaLinkedinIn className={styles.iconStyle} />
            <FaWhatsapp className={styles.iconStyle} />
          </div>
        </div>
      </div>
      <Popup isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default Card;
