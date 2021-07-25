import { NavLink } from 'react-router-dom';
// import {
//   authSelectors,
//   authOperations,
// } from '../../redux/auth/auth-operations';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import styles from './NavAuth.module.scss';

export default function NavAuth() {
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  const name = 'CurrentUser';

  // const onLogOut = useCallback(() => {
  //   dispatch(authOperations.logOut());
  // }, [dispatch]);
  const onLogOut = console.log('logout');
  return (
    <div className={styles.NavAuthWrapper}>
      <div className={styles.linksWapper}>
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

      <div className={styles.userWrapper}>
        <p className={styles.userName}>{name}</p>
        <button onClick={onLogOut} className={styles.logout}>
          Выйти
        </button>
      </div>
      <button>burger</button>
    </div>
  );
}
