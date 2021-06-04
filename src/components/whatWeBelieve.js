import React from 'react';
import Button from './button';
import SideBySide from './SideBySide';

export default function WhatWeBelieve() {
  const headline = (
    <span>
      We are for <span className='highlight'>everyone</span> and celebrate our
      differences.
    </span>
  );

  const sideText = (
    <p>
      We strive to represent the under-represented and elevate those that have
      had to struggle based solely on the basis of race, color, religion,
      gender, gender expression, age, national origin, disability, marital
      status, or sexual orientation. Our differences are our strengths and each
      of us brings that strength to the team. Representation makes our products
      and projects better and it’s celebrated.
    </p>
  );

  return (
    <SideBySide
      headline={headline}
      btnText='TELL ME MORE'
      sideText={sideText}
      flipped
    />
  );
}
