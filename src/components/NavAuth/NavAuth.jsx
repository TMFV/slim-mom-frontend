import { NavLink } from 'react-router-dom';
import styles from './NavAuth.module.scss';
export default function NavAuth() {
  return (
    <div className={styles.NavNotAuthWrapper}>
      <NavLink
        to="/diary"
        className={styles.enter}
        activeClassName={styles.activeEnter}
      >
        дневник
      </NavLink>
      <NavLink
        to="/calculator"
        className={styles.enter}
        activeClassName={styles.activeEnter}
      >
        калькулятор
      </NavLink>
    </div>
  );
}
