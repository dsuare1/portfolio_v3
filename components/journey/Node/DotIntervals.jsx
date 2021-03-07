import React from 'react';
import style from './dotIntervals.module.scss';

const DotIntervals = ({ basis, numDots }) => (
  <div
    className={
      basis === 'left' ? style.dotsLeftContainer : style.dotsRightContainer
    }
  >
    {Array.from(Array(numDots), (elem, index) => (
      <div key={`id-${index}`} className={style.nodeCenterLineDot} />
    ))}
  </div>
);

export default DotIntervals;
