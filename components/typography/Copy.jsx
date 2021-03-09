import React from 'react';
import PropTypes from 'prop-types';
import style from './copy.module.css';

export const StandardCopy = ({ children }) => <p>{children}</p>;

export const SecondaryCopy = ({ children }) => (
  <p className={style.secondaryCopy}>{children}</p>
);

export const LargeCopy = ({ children }) => (
  <p className={style.largeCopy}>{children}</p>
);

export const LargerCopy = ({ children }) => (
  <p className={style.largerCopy}>{children}</p>
);

StandardCopy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

SecondaryCopy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

SecondaryCopy.defaultProps = {
  children: null,
};

LargeCopy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

LargerCopy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
