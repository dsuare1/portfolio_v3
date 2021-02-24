import React from 'react';
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import style from './layout.module.css';

const Layout = ({ children }) => (
  <div className={style.layoutContainer}>
    <Navbar />
    <Contact />
    {children}
  </div>
);

export default Layout;
