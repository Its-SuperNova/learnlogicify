import React from "react";
import HeroPage from "./HeroSection";
import Description from "./Description";
import VideoSection from "./Videosection";
import styles from "./styles.module.css";
import Header from "../common/HeaderDark";
import GetToKnow from "./GetToKnow";
import ServiceGallery from "../serviceGallery";

const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <HeroPage />
      <Description />
      <VideoSection />
      <GetToKnow />
      <ServiceGallery />
    </main>
  );
};

export default HomePage;
