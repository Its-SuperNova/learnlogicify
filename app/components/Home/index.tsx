import React from "react";
import HeroPage from "./sections/HeroSection";
import Description from "./sections/Description";
import VideoSection from "./sections/Videosection";
import styles from "./styles.module.css";
import Header from "../common/HeaderDark";
import GetToKnow from "./sections/GetToKnow";
import Courses from "./sections/Courses"
import dynamic from "next/dynamic";

// Dynamically import AboutPortal with SSR disabled
const AboutPortal = dynamic(() => import("./sections/AboutPortal"), {
  ssr: false,
});

const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <HeroPage />
      <Description />
      <VideoSection />
      <GetToKnow />
      <AboutPortal />
      <Courses />
    </main>
  );
};

export default HomePage;
