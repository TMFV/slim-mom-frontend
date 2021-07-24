import React from 'react';
import { ReactComponent as LogoImage } from '../../assets/pictures/logo.svg';
import { ReactComponent as LogoText } from '../../assets/pictures/logo-text.svg';
import styles from './Logo.module.scss';

export default function Logo({ isAuthorised = false }) {
  return (
    <div>
      <LogoImage width={46} height={44} />
      {!isAuthorised && <LogoText width={107} height={16} />}
    </div>
  );
}
