import React from 'react';
import PropTypes from 'prop-types';
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

DotIntervals.propTypes = {
  basis: PropTypes.string.isRequired,
  numDots: PropTypes.number.isRequired,
};

export default DotIntervals;
