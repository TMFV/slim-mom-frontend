import { NavLink } from 'react-router-dom';
import styles from './NavNotAuth.module.scss';
export default function NavNotAuth() {
  return (
    <div className={styles.NavNotAuthWrapper}>
      <NavLink
        to="/login"
        className={styles.enter}
        activeClassName={styles.activeEnter}
      >
        вход
      </NavLink>
      <NavLink
        to="/register"
        className={styles.enter}
        activeClassName={styles.activeEnter}
      >
        регистрация
      </NavLink>
    </div>
  );
}
