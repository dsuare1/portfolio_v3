import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './navbar.module.scss';
import { HeadingH1, HeadingH5 } from '../typography/Headings';
import * as routePaths from '../../constants/routePaths';

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <div className={style.navbarWrapper}>
      <div className={style.navbarName}>
        <HeadingH1>
          <Link href="/">
            <a href="/" className={style.navLinkNoUnderline}>
              Derrick Suarez
            </a>
          </Link>
        </HeadingH1>
      </div>
      <div className={style.navbar}>
        {/* <HeadingH5> */}
        {/*  <Link href="/portfolio"> */}
        {/*    <a */}
        {/*      className={`${style.navLink} ${ */}
        {/*        pathname === routePaths.PORTFOLIO ? style.navLinkActive : null */}
        {/*      }`} */}
        {/*    > */}
        {/*      Portfolio */}
        {/*    </a> */}
        {/*  </Link> */}
        {/* </HeadingH5> */}
        <HeadingH5>
          <Link href="/">
            <a
              href="/"
              className={`${style.navLink} ${
                pathname === routePaths.HOME ? style.navLinkActive : null
              }`}
            >
              Home
            </a>
          </Link>
        </HeadingH5>
      </div>
    </div>
  );
};

export default Navbar;
