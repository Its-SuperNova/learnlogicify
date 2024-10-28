import React from "react";
import styles from "./styles.module.css";
import Hero from "./components/HeroSection"
import Header from "@/app/components/common/Header";
import OurVision from "./components/OurVision";
import OurServices from "./components/OurServices";
import Footer from "@/app/components/common/Footer";
const AboutPage = () => {
  return <div className={styles.main}>
    <Header/>
    <Hero />
    <OurVision/>
    <OurServices/>
    <Footer />
  </div>;
};

export default AboutPage;
