"use client";
import React from "react";
import styles from "./styles.module.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ContactForm from "./components/form";
import ReachOut from "./components/reachOut";
import Lottie from "lottie-react";
import animationData from "./components/lottie/Chatting.json"; // Ensure the path is correct

const Contact = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <section className={styles.container}>
          <section className={styles.left}>
            {/* Lottie Animation */}
            <Lottie
              animationData={animationData}
              loop={true}
              className={styles.lottie}
            />
          </section>
          <section className={styles.right}>
            <header>
              <h1 className={styles.title}>Let&apos;s Get in Touch</h1>
              <div className={styles.content}>
                <ContactForm />
              </div>
            </header>
          </section>
        </section>
        <section>
          <ReachOut />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
