import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionLayout from '../../components/sectionLayout/SectionLayout';
import { HeadingH2 } from '../typography/Headings';
import { LargerCopy } from '../typography/Copy';
import style from './journey.module.scss';

const foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

const Journey = () => (
  <SectionLayout>
    <ScrollAnimation
      animateIn="fadeInLeft"
      animateOut="fadeOutLeft"
      duration={0.5}
      offset={50}
    >
      <HeadingH2 id="journey">Journey</HeadingH2>
    </ScrollAnimation>
    <LargerCopy>
      My education about and entrance into software development came about in a
      non-traditional manner: after working as an educator for seven years, I
      took a leap and enrolled in the first cohort of the Coding Bootcamp at UT
      Austin, an intensive, job-skills-focused alternative education program,
      from April - October 2016. We moved quickly, covering full stack
      technologies, including Javascript (Node, jQuery, React), MySQL, MongoDB,
      HTML and CSS, among others. At the end of the program, I earned a position
      as a software engineer at a (now defunct) startup in Austin, TX.
    </LargerCopy>
    <div className={style.timelineContainer}>
        {foo.map((i) => (
            <div key={i} className={style.timelineItem} />
        ))}
    </div>
  </SectionLayout>
);

export default Journey;
