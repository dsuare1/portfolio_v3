import React from 'react';
import style from './copy.module.css';

export const StandardCopy = ({ children }) => <p>{children}</p>;

export const LargeCopy = ({ children }) => (
  <p className={style.largeCopy}>{children}</p>
);

export const LargerCopy = ({ children }) => (
  <p className={style.largerCopy}>{children}</p>
);
