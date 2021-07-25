import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  return (
    <div className={styles.burgerMenu}>
      <div className={styles.blur} />
      <NavLink
        to={routes.diary}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Дневник
      </NavLink>
      <NavLink
        to={routes.calculator}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Калькулятор
      </NavLink>
    </div>
  );
};

export default BurgerMenu;
