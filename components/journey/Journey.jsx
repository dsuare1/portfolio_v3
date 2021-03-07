import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionLayout from '../../components/sectionLayout/SectionLayout';
import { HeadingH2 } from '../typography/Headings';
import { LargerCopy } from '../typography/Copy';
import { nodes } from '../../constants/journeyNodes';
import style from './journey.module.scss';
import Node from './Node/Node';
import { FaBirthdayCake } from '@react-icons/all-files/fa/FaBirthdayCake';
import { FaBaby } from '@react-icons/all-files/fa/FaBaby';
import { FaSchool } from '@react-icons/all-files/fa/FaSchool';
import { FaCarSide } from '@react-icons/all-files/fa/FaCarSide';
import { FaPlaneDeparture } from '@react-icons/all-files/fa/FaPlaneDeparture';
import { FaUniversity } from '@react-icons/all-files/fa/FaUniversity';
import { FaMusic } from '@react-icons/all-files/fa/FaMusic';
import { FaBriefcase } from '@react-icons/all-files/fa/FaBriefcase';

const numberOfNodes = nodes.length;

const iconMap = {
  birthday: <FaBirthdayCake />,
  baby: <FaBaby />,
  degree: <FaUniversity />,
  diploma: <FaSchool />,
  music: <FaMusic />,
  'travel-car': <FaCarSide />,
  'travel-plane': <FaPlaneDeparture />,
  job: <FaBriefcase />,
};

const Journey = () => (
  <SectionLayout>
    <ScrollAnimation
      animateIn="fadeInDown"
      animateOut="fadeOutUp"
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
    <div id="timeline-container" className={style.timelineContainer} onScroll={() => console.log('foo')}>
      {nodes.map((nodeProps, index) => {
        const { id } = nodeProps;
        const icon = iconMap[nodeProps.icon];

        return (
          <Node
            key={id}
            icon={icon}
            index={index}
            nodeProps={nodeProps}
            numberOfNodes={numberOfNodes}
          />
        );
      })}
    </div>
  </SectionLayout>
);

export default Journey;
