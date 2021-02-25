import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionLayout from '../sectionLayout/SectionLayout';
import CardList from './CardList/CardList';
import { HeadingH2 } from '../typography/Headings';
import style from './developer.module.scss';

const Developer = () => (
  <SectionLayout>
    <ScrollAnimation
      animateIn="fadeInLeftBig"
      animateOut="fadeOutLeftBig"
      duration={0.5}
      offset={50}
    >
      <HeadingH2 id="developer">Developer</HeadingH2>
    </ScrollAnimation>
    <CardList />
  </SectionLayout>
);

export default Developer;
