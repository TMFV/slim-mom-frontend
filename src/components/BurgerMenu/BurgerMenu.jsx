import { NavLink } from 'react-router-dom';
import { useMemo } from 'react';
import routes from '../../routes';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  const navLinks = useMemo(() => routes.filter(route => route.isNav), []);

  return (
    <div className={styles.burgerMenu}>
      <div className={styles.blur} />
      {navLinks.map(link => (
        <NavLink
          to={link.path}
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default BurgerMenu;
