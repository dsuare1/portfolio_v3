/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import style from './headings.module.css';

export const HeadingH1 = ({ children }) => (
  <h1 className={style.headingH1}>{children}</h1>
);

export const HeadingH2 = ({ children, id }) => (
  <h2 id={id} className={style.headingH2}>
    {children}
  </h2>
);

export const HeadingH3 = (props) => {
  const { children, ...rest } = props;
  return (
    <h3 {...rest} className={style.headingH3}>
      {children}
    </h3>
  );
};

export const HeadingH4 = ({ children }) => (
  <h4 className={style.headingH4}>{children}</h4>
);

export const HeadingH5 = ({ children }) => (
  <h5 className={style.headingH5}>{children}</h5>
);

HeadingH1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

HeadingH2.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

HeadingH2.defaultProps = {
  id: '',
};

HeadingH3.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

HeadingH4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

HeadingH5.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
