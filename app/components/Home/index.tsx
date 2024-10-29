"use client"; // Ensure it's client-side

import React, { useEffect, useRef } from "react";
import HeroPage from "./sections/HeroSection";
import Description from "./sections/Description";
import VideoSection from "./sections/Videosection";
import styles from "./styles.module.css";
import Header from "../common/HeaderDark";
import GetToKnow from "./sections/GetToKnow";
import Courses from "./sections/Courses";
import Stats from "./sections/Stats";
import dynamic from "next/dynamic";
import Testimonials from "./sections/Testimonial";
import Faq from "./sections/Faq";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPortal = dynamic(() => import("./sections/AboutPortal"), {
  ssr: false,
});

const HomePage: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();

      // Set initial stroke state
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        strokeLinecap: "round", // Rounded edges
      });

      // Animate the path on scroll
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: pathRef.current, // Trigger based on SVG
          start: "top 50%", // Start animation halfway through description
          end: "bottom top", // End when the SVG leaves the viewport
          scrub: 1, // Smooth scrolling animation
        },
      });
    }
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <HeroPage />
      <Description />
      <VideoSection />
      <GetToKnow />
      <AboutPortal />
      <Courses />
      <Stats />
      <Testimonials />
      <Faq />

      {/* 
      <svg
        width="1850"
        height="2463"
        viewBox="0 0 1850 2463"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.stroke}
      >
        <g clipPath="url(#clip0_902_4)">
          <path
            ref={pathRef}
            d="M-43 131.5C380 244.5 503 599.5 380 782C322.375 867.5 84.9 884.9 128.5 670.5C174.333 531.833 346.2 296.1 667 462.5C740.833 499 873.1 614 811.5 782C734.5 992 1026 894 1035.5 886.5C1045 879 1347.5 812.5 1270.5 1109.5C1208.9 1347.1 1543 1375 1657 1265.5C1731.25 1194.18 1657 1055 1513 1042..."
          />
        </g>
      </svg>
      */}
    </main>
  );
};

export default HomePage;
