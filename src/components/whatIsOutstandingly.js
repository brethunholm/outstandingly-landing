import React from 'react';
import Button from './button';
import SideBySide from './SideBySide';

export default function WhatIsOutstandingly() {
  const headline = (
    <span>
      Break out of the endless tutorial cycle and learn{' '}
      <span className='highlight'>web development</span> on the job
    </span>
  );

  const sideText = (
    <p>
      We offer newer developers the next step to gain the experience required to
      get their dream job. Our goal is to provide a productive, accessible,
      collaborative wwork environment for new developers who are struggling to
      get their foot in the door. Collaborative project-based Creator Teams work
      together to create high-quality portfolio projects, gain real-world
      experience, and work in a development team environment while building a
      career network.
    </p>
  );

  return (
    <SideBySide headline={headline} btnText='SHOW ME HOW' sideText={sideText} />
  );
}
