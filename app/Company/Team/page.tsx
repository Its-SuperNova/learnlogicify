import React from 'react'
import OurTeam from './OurTeam';
import JoinUs from './JoinUs';
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";

const ScrollHandler = dynamic(
  () => import("@/app/components/Home/ScrollHandler"),
  {
    ssr: false,
  }
);

const Team: React.FC = () => {
  return (
    <>
      <ScrollHandler />
      <main className={styles.main}>
        <Header />
        <div className="hero-section">
          <OurTeam />
        </div>
        <JoinUs />
        <Footer />
      </main>
    </>
  );
};

export default Team;
