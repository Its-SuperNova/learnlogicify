"use client"; // Ensure this is at the top of the file

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Updated import
import styles from "./styles.module.css";
import { LuFileSignature } from "react-icons/lu";
import { GoShieldLock } from "react-icons/go";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import Privacy from "../PrivacyPolicy";
import Refund from "../RefundPolicy";
import Terms from "../terms&Conditions";

const LegalPoliciesBox = () => {
  const [activeTab, setActiveTab] = useState<string>("terms");
  const searchParams = useSearchParams(); // Use useSearchParams instead of useRouter

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

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div className={styles.header}>
          <h2 className={styles.h2}>Legal & Policies</h2>
        </div>
        <div className={styles.tabContainer}>
          <div className={styles.tab1}>
            <button
              className={`${styles.btn} ${
                activeTab === "terms" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("terms")}
            >
              <div className={styles.btnContainer}>
                <div className={styles.icon}>
                  <LuFileSignature size={20} />
                </div>
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
              onClick={() => setActiveTab("privacy")}
            >
              <div className={styles.btnContainer}>
                <div className={styles.icon}>
                  <GoShieldLock size={20} />
                </div>
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
              onClick={() => setActiveTab("refund")}
            >
              <div className={styles.btnContainer}>
                <div className={styles.icon}>
                  <RiMoneyRupeeCircleLine size={20} />
                </div>
                <div>
                  <p>Refund Policy</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

export default LegalPoliciesBox;
