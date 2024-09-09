import React from "react";
import HeroPage from "./HeroSection";
import Description from "./Description";
import VideoSection from "./Videosection";
import ServiceGallery from "../common/ServiceGallery";
import FeedBack from "./FeedBack";
import styles from "./styles.module.css";
import Header from "../common/HeaderDark";
import GetToKnow from "./GetToKnow";


const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <HeroPage />
      <Description />
      <VideoSection />
      <GetToKnow />
    </main>
  );
};

export default HomePage;
