import React from 'react';
import AboutUs from '../components/aboutUs';
import BenefitsSection from '../components/benefitsSection';
import Contact from '../components/contact';
import FaqSection from '../components/faq';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Nav from '../components/navBar';
import WhatIsOutstandingly from '../components/whatIsOutstandingly';

export default function IndexPage() {
  return (
    <>
      <Nav />
      <Hero />
      <BenefitsSection />
      <WhatIsOutstandingly />
      <AboutUs />
      <Contact />
      <FaqSection />
      <Footer />
    </>
  );
}
