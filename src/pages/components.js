import React from 'react';
import BenefitsSection from '../components/benefitsSection';
import Button from '../components/button';
import Contact from '../components/contact';
import Footer from '../components/footer';
import MembersCard from '../components/MembersCard';
import Hero from '../components/hero';
import SectionContainer from '../components/section-container';
import WhatIsOutstandingly from '../components/whatIsOutstandingly';
import AboutUs from '../components/aboutUs';
import Nav from '../components/navBar';

export default function ComponentsPage() {
  return (
    <>
      <h1>A collection of our components and a place to test them out!</h1>
      <h2>section-container</h2>
      <SectionContainer padding="2rem" background="#ababab" flex="column">
        <p>This is a section container</p>
        <p>Props:</p>
        <ul>
          <li>
            <i>background:</i> a color for the background
          </li>
          <li>
            <i>padding:</i> values for padding-left and padding-right
          </li>
          <li>
            <i>flex:</i> value for flex-direction
          </li>
        </ul>
      </SectionContainer>
      <Nav />
      <Hero />
      {/* the benefits section */}
      <BenefitsSection />
      {/* member card test */}
      {/* <MembersCard /> */}
      <AboutUs />
      <WhatIsOutstandingly />
      <Contact />
      <SectionContainer>
        <Button text="This is a button" />
      </SectionContainer>
      <Footer />
    </>
  );
}
