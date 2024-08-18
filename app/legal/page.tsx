import React from "react";
import styles from "./styles.module.css";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import Box from "./components/box"
const legal = () => {
  return (
    <>
      <main className={styles.main}>
        <header>
          <Header />
        </header>
        <section className={styles.container}>
          <Box/>
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default legal;
