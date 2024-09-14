import React from "react";
import HeroPage from "./sections/HeroSection";
import Description from "./sections/Description";
import VideoSection from "./sections/Videosection";
import styles from "./styles.module.css";
import Header from "../common/HeaderDark";
import GetToKnow from "./sections/GetToKnow";
import AboutPortal from "./sections/AboutPortal";
const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <HeroPage />
      <Description />
      <VideoSection />
      <GetToKnow />
      <AboutPortal />
    </main>
  );
};

export default HomePage;
