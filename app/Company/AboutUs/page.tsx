import React from "react";
import HeroPage from "./HeroSection";
import ServicesSection from "./ServicesSection";
import ServiceGallery from "@/app/components/serviceGallery";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import LearnMore from "./LearnMore";
import Probanner from "@/app/components/common/ProBanner";
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
        <div className="hero-section">
          <HeroPage />
        </div>
        <ServicesSection />
        <ServiceGallery />
        <LearnMore />
        <Probanner />
        <Footer />
      </main>
    </>
  );
};

export default AboutUs;
