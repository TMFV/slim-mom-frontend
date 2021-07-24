import React from 'react';
import { ReactComponent as LogoImage } from '../../assets/pictures/logo.svg';
import { ReactComponent as LogoText } from '../../assets/pictures/logo-text.svg';
import styles from './Logo.module.scss';

export default function Logo({ isAuthorized = false }) {
  return (
    <div>
      <LogoImage width={46} height={44} />
      {!isAuthorized && <LogoText width={107} height={16} />}
    </div>
  );
}
