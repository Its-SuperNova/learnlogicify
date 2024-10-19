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
            d="M-43 131.5C380 244.5 503 599.5 380 782C322.375 867.5 84.9 884.9 128.5 670.5C174.333 531.833 346.2 296.1 667 462.5C740.833 499 873.1 614 811.5 782C734.5 992 1026 894 1035.5 886.5C1045 879 1347.5 812.5 1270.5 1109.5C1208.9 1347.1 1543 1375 1657 1265.5C1731.25 1194.18 1657 1055 1513 1042.5C1418 1022 1252.2 1074.02 1385 1314.02C1517.8 1554.02 1349.5 1924.5 1277 1789.52C1191.32 1630.01 894.872 1789.61 836.5 1611.5C758.5 1373.5 535.5 1177.5 299.5 1300.5C110.792 1398.85 211 1664.5 476.5 1752C535.5 1771.44 828 1812.5 441.5 2013C55 2213.5 189.5 1736 299.5 1919C352.62 2007.37 148 2201 -13.5 2073.5"
            stroke="url(#paint0_linear_902_4)"
            strokeWidth="30" // Bold stroke
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_902_4"
            x1="835.281"
            y1="131.5"
            x2="835.281"
            y2="2426.46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3845E8" />
            <stop offset="0.5" stopColor="#5982FF" />
            <stop offset="0.75" stopColor="#2FB6DD" />
            <stop offset="1" stopColor="#92FFFE" />
          </linearGradient>
          <clipPath id="clip0_902_4">
            <rect width="1850" height="2463" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </main>
  );
};

export default HomePage;
