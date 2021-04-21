import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import style from './layout.module.css';

const Layout = ({ children }) => (
  <div className={style.layoutContainer}>
    <Navbar />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
