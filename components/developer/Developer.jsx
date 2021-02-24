import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionLayout from '../sectionLayout/SectionLayout';
import CardList from './CardList/CardList';
import style from './developer.module.scss';

const Developer = () => (
  <SectionLayout>
    <ScrollAnimation
      animateIn="fadeInLeftBig"
      animateOut="fadeOutLeftBig"
      duration={0.5}
      offset={50}
    >
      <h1 id="developer">Developer</h1>
    </ScrollAnimation>
    <CardList />
  </SectionLayout>
);

export default Developer;
