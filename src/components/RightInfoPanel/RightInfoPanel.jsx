import { useSelector, useDispatch } from 'react-redux';
import styles from './RightInfoPanel.module.scss';

function productsToString(productsArray) {
  let textString = '';
  productsArray.forEach((product, idx) => {
    if (idx === 0) {
      textString += `${product}`;
    }
    textString += `, ${product}`;
  });
  return textString;
}

const RightInfoPanel = () => {
  //const isAuthenticated = useSelector(usersSelectors.getIsAuthenticated);
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  const name = 'CurrentUser';
  const date = '20.06.2020'; // Дата для отображаемого списка

  const eating = 980; //Употреблено
  const dailyRate = 2400; //Дневная норма
  const remaining = dailyRate - eating; //Осталось
  const percentOfRate = Math.trunc((remaining / dailyRate) * 100); //n% от нормы
  const productsArray = [
    'все бульоны/отвары',
    'жирная рыба',
    'икра и мясо',
    'грибы',
    'крупы(пшено, перловая, пшеничная)',
  ];
  // const onLogOut = useCallback(() => {
  //   dispatch(authOperations.logOut());
  // }, [dispatch]);
  const onLogOut = console.log('logout');

  return (
    <div className={styles.panelContainer}>
      <div className={styles.userWrapper}>
        <p className={styles.userName}>{name}</p>
        <button onClick={onLogOut} className={styles.logout}>
          Выйти
        </button>
      </div>
      <div>
        <h5> Сводка за {date}</h5>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span>Осталось</span>
            <span>{remaining} ккал</span>
          </li>
          <li className={styles.listItem}>
            <span>Употреблено</span>
            <span>{eating} ккал</span>
          </li>
          <li className={styles.listItem}>
            <span>Дневная норма</span>
            <span>{dailyRate} ккал</span>
          </li>
          <li className={styles.listItem}>
            <span>n% от нормы</span>
            <span>{percentOfRate} ккал</span>
          </li>
        </ul>
      </div>
      <div>
        <h5> Нерекомендуемые продукты</h5>
        <span className={styles.products}>
          {productsToString(productsArray)}
        </span>
      </div>
    </div>
  );
};
export default RightInfoPanel;
