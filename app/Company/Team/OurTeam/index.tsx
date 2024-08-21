"use client";
import React from "react";
import styles from "./Styles.module.css";
import Card from "./card";
import { teamMembers } from "../data/teamData"; // Import the team data
import Image from "next/image";

const OurTeam = () => {
  return (
    <main className={styles.container}>
      <section className={styles.Header}>
        <h2 className={styles.subHeading}>Our Team</h2>
        <h1 className={styles.title}>
          Meet Our <span className={styles.animatedGradient}>Leaders</span>
        </h1>
        <p className={styles.titleDesc}>
          Meet the talented individuals behind our success
        </p>
      </section>
      <section className={styles.content}>
        {teamMembers.map((member, index) => (
          <Card key={index} member={member} /> // Pass each member to the Card component
        ))}
      </section>
      <section className={styles.descContainer}>
        <p className={styles.desc}>
          Our dynamic team at LearnLogicify Technologies is a fusion of talented
          individuals, each bringing a wealth of knowledge and experience from
          diverse backgrounds. Together, we share a deep commitment to
          excellence, innovation, and delivering high-quality education. We work
          hand in hand to create and offer exceptional training programs and
          courses, tailored to meet the evolving needs of our students. Get to
          know the passionate professionals who fuel our mission, driving our
          vision of delivering top-notch learning experiences forward, and
          ensuring that every student thrives in their journey with us
        </p>
      </section>
      <section className={styles.imageContainer}>
        <img className={styles.teamImg} src="/images/team/team.png" alt="" />
        <div className={styles.overlayText}>#TogetherWeGrow</div>
      </section>
    </main>
  );
};

export default OurTeam;
