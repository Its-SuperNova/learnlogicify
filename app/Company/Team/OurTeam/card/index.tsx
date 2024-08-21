"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import Popup from "../popup";
import { TeamMember } from "../../data/teamData"; // Import the types

type CardProps = {
  member: TeamMember;
};

const Card: React.FC<CardProps> = ({ member }) => {
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
      <div className={styles.container}>
        <div
          className={styles.card}
          style={{ backgroundColor: member.backgroundColor }}
          onClick={toggleModal}
        >
          <img
            src={member.image}
            alt={`${member.name} Profile Image`}
            className={styles.profileImage}
          />
          <div className={styles.popup}>
            <p>{member.designation}</p>
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
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconStyle}
              >
                <FaInstagram />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconStyle}
              >
                <FaLinkedinIn />
              </a>
              <a
                href={member.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconStyle}
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.name}>
          <p>{member.nickname}</p>
        </div>
      </div>
      {isModalOpen && (
        <Popup
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          member={member}
        />
      )}
    </>
  );
};

export default Card;
