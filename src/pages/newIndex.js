import React from 'react';
import AboutUs from '../components/aboutUs';
import BenefitsSection from '../components/benefitsSection';
import Contact from '../components/contact';
import FaqSection from '../components/faq';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Navbar from '../components/navBar';
import WhatIsOutstandingly from '../components/whatIsOutstandingly';
import WhatWeBelieve from '../components/whatWeBelieve';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsOutstandingly />
      <WhatWeBelieve />
      <BenefitsSection />
      <AboutUs />
      <FaqSection />
      <Contact />
      <Footer />
    </>
  );
}
