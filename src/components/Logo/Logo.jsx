import React from 'react';
import { ReactComponent as LogoImage } from '../../assets/pictures/logo.svg';
import { ReactComponent as LogoText } from '../../assets/pictures/logo-text.svg';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

export default function Logo({ isAuthorized = false }) {
  return (
    <Link className={styles.logowrapper} to="/">
      <LogoImage width={46} height={44} className={styles.logoImage} />

      <LogoText
        width={107}
        height={16}
        className={isAuthorized ? styles.logoTextAuth : styles.logoTextNotAuth}
      />
    </Link>
  );
}
