"use client";
import React from "react";
import styles from "./styles.module.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ContactForm from "./components/form"; // Import the form component

const Contact = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <section className={styles.left}></section>
        <section className={styles.right}>
          <header>
            <h1 className={styles.title}>Let's Get in Touch</h1>
            <div className={styles.content}>
              <ContactForm /> {/* Use the imported form component */}
            </div>
          </header>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
