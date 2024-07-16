import React from "react";
import AboutPortal from "./AboutPortal";
import Different from "./Different";
import AboutPortalInterface from "./AboutPortalInterface";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
const LMSPortal = () => {
  return (
    <>
      <main>
        <Header />
        <AboutPortal />
        <Different />
        <AboutPortalInterface />
        <Footer />
      </main>
    </>
  );
};

export default LMSPortal;
