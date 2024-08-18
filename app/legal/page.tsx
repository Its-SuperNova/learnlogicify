"use client"; // This should be at the top

import React, { Suspense } from "react";
import styles from "./styles.module.css";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import LegalPoliciesBox from "./components/box";

const LegalPage = () => {
  return (
    <>
      <main className={styles.main}>
        <header>
          <Header />
        </header>
        <section className={styles.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <LegalPoliciesBox />
          </Suspense>
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default LegalPage;
