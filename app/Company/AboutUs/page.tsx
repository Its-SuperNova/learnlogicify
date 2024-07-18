import React from 'react'
import HeroPage from './HeroSection';
import ServicesSection from './ServicesSection';
import ServiceGallery from '@/app/components/common/ServiceGallery';
import Header from '@/app/components/common/Header';
import Footer from '@/app/components/common/Footer';
import LearnMore from './LearnMore';
import Probanner from '@/app/components/common/ProBanner';

const AboutUs = () => {
  return (
    <>
        <main>
          <Header />
          <HeroPage />
          <ServicesSection />
          <ServiceGallery />
          <LearnMore />
          <Probanner />
          <Footer />
        </main>
    </>
  );
};

export default AboutUs;
