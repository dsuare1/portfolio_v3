import React from 'react';
import styles from './sectionLayout.module.css';

const SectionLayout = ({ children }) => (
  <div className={styles.sectionContainer}>{children}</div>
);

export default SectionLayout;
