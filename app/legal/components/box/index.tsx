"use client"; // Ensure this is at the top of the file

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Updated import
import styles from "./styles.module.css";
import Privacy from "../PrivacyPolicy";
import Refund from "../RefundPolicy";
import Terms from "../terms&Conditions";

const LegalPoliciesBox = () => {
  const [activeTab, setActiveTab] = useState<string>("terms");
  const [showSidebar, setShowSidebar] = useState<boolean>(false); // State to toggle sidebar visibility
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get("tab") as string;
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const renderContent = () => {
    switch (activeTab) {
      case "terms":
        return <Terms />;
      case "privacy":
        return <Privacy />;
      case "refund":
        return <Refund />;
      default:
        return null;
    }
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (window.innerWidth < 1000) {
      setShowSidebar(false); // Close sidebar only on small screens
    }
  };

  return (
    <div className={styles.container}>
      {/* Hamburger Menu for Small Screens */}
      <div
        className={`${styles.navIcon3} ${showSidebar ? styles.open : ""}`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar with Tabs */}
      <div
        className={`${styles.tabs} ${showSidebar ? styles.showSidebar : ""}`}
      >
        <div className={styles.header}>
          <h2 className={styles.h2}>Legal & Policies</h2>
        </div>
        <div className={styles.tabContainer}>
          <div className={styles.tab1}>
            <button
              className={`${styles.btn} ${
                activeTab === "terms" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("terms")}
            >
              <div className={styles.btnContainer}>
                <div>
                  <p>Terms & Conditions</p>
                </div>
              </div>
            </button>
          </div>
          <div className={styles.tab2}>
            <button
              className={`${styles.btn} ${
                activeTab === "privacy" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("privacy")}
            >
              <div className={styles.btnContainer}>
                <div>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </button>
          </div>
          <div className={styles.tab3}>
            <button
              className={`${styles.btn} ${
                activeTab === "refund" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("refund")}
            >
              <div className={styles.btnContainer}>
                <div>
                  <p>Refund Policy</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

export default LegalPoliciesBox;
