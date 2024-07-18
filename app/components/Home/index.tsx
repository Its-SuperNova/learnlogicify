import React from "react";
import HeroPage from "./HeroSection";
import ServicesSection from "./ServicesSection";
import VideoSection from "./Videosection";
import ServiceGallery from "../common/ServiceGallery";
import FeedBack from "./FeedBack";
import Probanner from "../common/ProBanner";
import styles from "./styles.module.css";

const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className="hero-section">
        <HeroPage />
      </div>
      <VideoSection />
      <ServicesSection />
      <ServiceGallery />
      <FeedBack />
      <Probanner />
    </main>
  );
};

export default HomePage;
