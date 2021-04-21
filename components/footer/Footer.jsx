import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { HeadingH5 } from '../typography/Headings';
import * as routePaths from '../../constants/routePaths';
import * as socialLinks from '../../constants/socialLinks';
import style from './footer.module.scss';
import navStyle from '../navbar/navbar.module.css';
import { SecondaryCopy } from '../typography/Copy';

const targetBlank = '_blank';

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <>
      <div className={style.footerContainer}>
        <div className={style.footerNav}>
          <HeadingH5>
            <Link href="/">
              <a
                href="/"
                className={`${navStyle.navLink} ${
                  pathname === routePaths.HOME ? navStyle.navLinkActive : null
                }`}
              >
                Home
              </a>
            </Link>
          </HeadingH5>
        </div>
        <div className={style.socials}>
          <a href={socialLinks.gitHub} target={targetBlank}>
            <FaGithub className={style.socialIcon} />
          </a>
          <a href={socialLinks.linkedIn} target={targetBlank}>
            <FaLinkedin className={style.socialIcon} />
          </a>
          <a href={socialLinks.twitter} target={targetBlank}>
            <FaTwitter className={style.socialIcon} />
          </a>
          <a href={socialLinks.instagram} target={targetBlank}>
            <FaInstagram className={style.socialIcon} />
          </a>
        </div>
      </div>
      <div className={style.copyright}>
        <SecondaryCopy>&copy; Derrick Suarez 2021</SecondaryCopy>
      </div>
    </>
  );
};

export default Footer;
