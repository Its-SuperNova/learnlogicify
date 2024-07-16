import React from "react";
import HeroPage from "./HeroSection";
import ServicesSection from "./ServicesSection";
import VideoSection from "./Videosection";
import ServiceGallery from "../common/ServiceGallery";
import FeedBack from "./FeedBack";
import Probanner from "../common/ProBanner";
const Home = () => {
  return (
    <>
      <main>
        <HeroPage />
        <VideoSection />
        <ServicesSection />
        <ServiceGallery />
        <FeedBack />
        <Probanner />
      </main>
    </>
  );
};

export default Home;
