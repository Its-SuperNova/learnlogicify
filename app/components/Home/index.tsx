import React from "react";
import HeroPage from "./HeroSection";
import ServicesSection from "./ServicesSection";
import VideoSection from "./Videosection";
import ServiceGallery from "../common/ServiceGallery";
import FeedBack from "./FeedBack";
import Probanner from "../common/ProBanner";
import styles from "./styles.module.css";
import Header from "../common/HeaderDark";
import Footer from "../common/Footer";



const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <HeroPage />
      <ServicesSection />
    </main>
  );
};

export default HomePage;
