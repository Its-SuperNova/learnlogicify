// components/SocialLink/index.tsx
import React from "react";
import styles from "./styles.module.css";

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  alt: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt }) => {
  return (
    <a
      href={href}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
    >
      {" "}
      <div className={styles.icon}> {icon}</div>{" "}
    </a>
  );
};

export default SocialLink;
