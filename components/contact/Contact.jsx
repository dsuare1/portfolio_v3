import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import style from './contact.module.scss';

const Contact = () => (
  <div className={style.contactCard}>
    <FaGithub className={style.contactIcon} />
    <FaLinkedin className={style.contactIcon} />
    <FaTwitter className={style.contactIcon} />
    <FaInstagram className={style.contactIcon} />
  </div>
);

export default Contact;
