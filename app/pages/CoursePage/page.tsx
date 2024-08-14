import React from "react";
import styles from "./styles.module.css";
import Hero from "./components/Hero";
import Header from "@/app/components/common/Header";
import Syllabus from "./components/Syllabus";
import CertificateSection from "../common/CertificateSection"
const CoursePage = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.container}>
          <Hero />
          <Syllabus />
          <CertificateSection />
        </div>
      </div>
    </>
  );
};

export default CoursePage;
