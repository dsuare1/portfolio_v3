import React, { useCallback, useRef, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import throttle from 'lodash.throttle';
import { FaBirthdayCake } from '@react-icons/all-files/fa/FaBirthdayCake';
import { FaBaby } from '@react-icons/all-files/fa/FaBaby';
import { FaSchool } from '@react-icons/all-files/fa/FaSchool';
import { FaCarSide } from '@react-icons/all-files/fa/FaCarSide';
import { FaPlaneDeparture } from '@react-icons/all-files/fa/FaPlaneDeparture';
import { FaUniversity } from '@react-icons/all-files/fa/FaUniversity';
import { FaMusic } from '@react-icons/all-files/fa/FaMusic';
import { FaBriefcase } from '@react-icons/all-files/fa/FaBriefcase';
import SectionLayout from '../sectionLayout/SectionLayout';
import { HeadingH2 } from '../typography/Headings';
import { LargerCopy } from '../typography/Copy';
import { nodes } from '../../constants/journeyNodes';
import style from './journey.module.scss';
import Node from './Node/Node';

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

const Journey = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const timelineContainerRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedOnScroll = useCallback(
    throttle(() => {
      const leftPosition = timelineContainerRef.current.scrollLeft;
      setShowLeftArrow(leftPosition > 0);

      const { scrollWidth } = timelineContainerRef.current;
      const { offsetWidth } = timelineContainerRef.current;
      const rightPosition = scrollWidth - leftPosition;
      setShowRightArrow(rightPosition !== offsetWidth);
    }, 300),
    [],
  );

  const handleTimelineScroll = () => {
    debouncedOnScroll();
  };

  return (
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
        My education about and entrance into software development came about in
        a non-traditional manner: after working as an educator for seven years,
        I took a leap and enrolled in the first cohort of the Coding Bootcamp at
        UT Austin, an intensive, job-skills-focused alternative education
        program, from April - October 2016. We moved quickly, covering full
        stack technologies, including Javascript (Node, jQuery, React), MySQL,
        MongoDB, HTML and CSS, among others. At the end of the program, I earned
        a position as a software engineer at a (now defunct) startup in Austin,
        TX.
      </LargerCopy>
      <div className={style.timelineContainerWrapper}>
        <div
          className={`${style.leftArrow} ${!showLeftArrow ? style.hide : ''}`}
        />
        <div
          className={style.timelineContainer}
          onScroll={handleTimelineScroll}
          ref={timelineContainerRef}
        >
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
        <div
          className={`${style.rightArrow} ${!showRightArrow ? style.hide : ''}`}
        />
      </div>
    </SectionLayout>
  );
};

export default Journey;
