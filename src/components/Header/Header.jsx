import { NavLink } from 'react-router-dom';
import Container from '../Container';
import Logo from '../Logo';
import Nav from '../Nav';
import NavAuth from '../NavAuth';
import NavNotAuth from '../NavNotAuth';
import styles from './Header.module.scss';

export default function Header() {
  const isAuthenticated = false;
  return (
    <Container>
      <div className={styles.navWrapper}>
        <Logo isAuthorized={isAuthenticated} />
        <Nav> {isAuthenticated ? <NavAuth /> : <NavNotAuth />} </Nav>
      </div>
    </Container>
  );
}
