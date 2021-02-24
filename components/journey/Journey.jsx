import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionLayout from '../../components/sectionLayout/SectionLayout';

const Journey = () => (
  <SectionLayout>
    <ScrollAnimation
      animateIn="fadeInLeft"
      animateOut="fadeOutLeft"
      duration={0.5}
      offset={50}
    >
      <h1 id="journey">Journey</h1>
    </ScrollAnimation>
  </SectionLayout>
);

export default Journey;
