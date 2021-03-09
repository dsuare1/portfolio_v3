import React from 'react';
import PropTypes from 'prop-types';
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

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
