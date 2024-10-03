import React from "react";
import styles from "./styles.module.css";
import Hero from "./components/Hero";
import Header from "@/app/components/common/Header";
import Syllabus from "./components/Syllabus";
import CertificateSection from "../common/CertificateSection";
import CertificateProcess from "./components/CertificationProcess";
import Footer from "@/app/components/common/Footer";
import dynamic from "next/dynamic";
const ScrollHandler = dynamic(
  () => import("@/app/components/Home/ScrollHandler"),
  {
    ssr: false,
  }
);

const CoursePage = () => {
  return (
    <>
      <ScrollHandler />
      <Header />
      <div className={styles.main}>
        <div className={styles.container}>
          <Hero />
          <Syllabus />
          <CertificateSection />
          <CertificateProcess />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CoursePage;
