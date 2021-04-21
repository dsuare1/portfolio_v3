import React from 'react';
import PropTypes from 'prop-types';
import style from './sectionLayout.module.css';

const SectionLayout = ({ children }) => (
  <div className={style.sectionContainer}>{children}</div>
);

SectionLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SectionLayout;
