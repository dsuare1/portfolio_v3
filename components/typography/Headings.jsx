import React from 'react';
import style from './headings.module.css';

export const HeadingH1 = ({ children }) => (
  <h1 className={style.headingH1}>{children}</h1>
);

export const HeadingH2 = ({ children, id }) => (
  <h2 id={id} className={style.headingH2}>
    {children}
  </h2>
);

export const HeadingH3 = ({ children }) => (
  <h3 className={style.headingH3}>{children}</h3>
);

export const HeadingH4 = ({ children }) => (
  <h4 className={style.headingH4}>{children}</h4>
);

export const HeadingH5 = ({ children }) => (
  <h5 className={style.headingH5}>{children}</h5>
);
