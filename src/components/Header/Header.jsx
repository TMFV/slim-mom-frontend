import Logo from '../Logo';
import Nav from '../Nav';
import NavAuth from '../NavAuth';
import NavNotAuth from '../NavNotAuth';
import { ReactComponent as ArrowBack } from '../../assets/pictures/arrowBack.svg';
import { useHistory } from 'react-router-dom';

import styles from './Header.module.scss';

export default function Header(goBack) {
  let history = useHistory();
  function handleGoBack() {
    history.push('/');
    goBack = false;
  }

  const isAuthenticated = true;
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.navWrapper}>
        <Logo isAuthorized={isAuthenticated} />
        <Nav> {isAuthenticated ? <NavAuth /> : <NavNotAuth />} </Nav>
        <div className={styles.arrowBack}>
          <button type="button" className={styles.arrowBtn}>
            {!goBack && <ArrowBack onClick={handleGoBack} />}
          </button>
        </div>
      </div>
    </div>
  );
}
