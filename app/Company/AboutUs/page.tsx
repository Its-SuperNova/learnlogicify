import React from "react";
import HeroPage from "./HeroSection";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
const ScrollHandler = dynamic(
  () => import("@/app/components/Home/ScrollHandler"),
  {
    ssr: false,
  }
);

const AboutUs: React.FC = () => {
  return (
    <>
      <ScrollHandler />
      <main className={styles.main}>
        <Header />
        <HeroPage />
        <Footer />
      </main>
    </>
  );
};

export default AboutUs;
