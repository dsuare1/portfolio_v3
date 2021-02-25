import React from 'react';
import Image from 'next/image';
import TextLoop from 'react-text-loop';
import SectionLayout from '../sectionLayout/SectionLayout';
import { HeadingH2 } from '../typography/Headings';
import { LargerCopy } from '../typography/Copy';
import style from './person.module.scss';

const Person = () => {
  const springConfig = {
    stiffness: 100,
    damping: 15,
  };

  return (
    <SectionLayout>
      <div className={style.personGridLayout}>
        <Image
          src="/images/profile_pic.png"
          alt="Derrick Suarez"
          width={250}
          height={250}
          className={style.profilePic}
        />
        <div className={style.copyContainer}>
          <TextLoop springConfig={springConfig}>
            <HeadingH2>
              <span className={style.fontOrange}>>></span> Software Engineer
            </HeadingH2>
            <HeadingH2>
              <span className={style.fontOrange}>>></span> Father
            </HeadingH2>
            <HeadingH2>
              <span className={style.fontOrange}>>></span> Husband
            </HeadingH2>
            <HeadingH2>
              <span className={style.fontOrange}>>></span> Web Developer
            </HeadingH2>
            <HeadingH2>
              <span className={style.fontOrange}>>></span> Music Enthusiast
            </HeadingH2>
            <HeadingH2>
              <span className={style.fontOrange}>>></span> Traveler
            </HeadingH2>
          </TextLoop>
          <div>
            <LargerCopy>
              Passionate about building testable, scalable software, with a
              focus on APIs and backend systems. I'm comfortable anywhere on the
              stack and have worked with a{' '}
              <a className={style.bioTextLink} href="#developer">
                variety of technologies
              </a>{' '}
              during the course of my{' '}
              <a className={style.bioTextLink} href="#journey">
                journey
              </a>{' '}
              as a professional software engineer.
            </LargerCopy>
          </div>
        </div>
        <div className={style.downArrowContainer}>
          <div className={style.downArrow1} />
          <div className={style.downArrow2} />
          <div className={style.downArrow3} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Person;
