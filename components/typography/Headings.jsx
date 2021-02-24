import React from 'react';
import style from './headings.module.css';

export const HeadingH1 = ({ children }) => (
  <span className={style.headingH1}>{children}</span>
);

export const HeadingH2 = ({ children }) => (
  <span className={style.headingH2}>{children}</span>
);

export const HeadingH3 = ({ children }) => (
  <span className={style.headingH3}>{children}</span>
);

export const HeadingH4 = ({ children }) => (
  <span className={style.headingH4}>{children}</span>
);

export const HeadingH5 = ({ children }) => (
  <span className={style.headingH5}>{children}</span>
);
