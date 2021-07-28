import { useSelector, useDispatch } from 'react-redux';
import styles from './RightInfoPanel.module.scss';

function productsToString(productsArray) {
  let textString = '';
  productsArray.forEach((product, idx) => {
    if (idx === 0) {
      textString += `${product}`;
      textString = textString[0].toUpperCase() + textString.substring(1);
    } else if (idx > 0) {
      textString += `, ${product}`;
    }
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
    'крупы (пшено, перловая, пшеничная)',
  ];
  // const onLogOut = useCallback(() => {
  //   dispatch(authOperations.logOut());
  // }, [dispatch]);
  const onLogOut = console.log('logout');

  return (
    <div className={styles.panelContainer}>
      <div className={styles.panelContainerInner}>
        <div className={styles.userInfo}>
          <div className={styles.userWrapper}>
            <p className={styles.userName}>{name}</p>
            <button onClick={onLogOut} className={styles.logout}>
              Выйти
            </button>
          </div>
        </div>
        <div className={styles.informationListBlock}>
          <h5 className={styles.informationListTitle}>Сводка за {date}</h5>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span>Осталось</span>
              <span className={styles.listItemValue}>{remaining} ккал</span>
            </li>
            <li className={styles.listItem}>
              <span>Употреблено</span>
              <span className={styles.listItemValue}>{eating} ккал</span>
            </li>
            <li className={styles.listItem}>
              <span>Дневная норма</span>
              <span className={styles.listItemValue}>{dailyRate} ккал</span>
            </li>
            <li className={styles.listItem}>
              <span>n% от нормы</span>
              <span className={styles.listItemValue}>{percentOfRate} ккал</span>
            </li>
          </ul>
        </div>
        <div className={styles.productsBlock}>
          <h5 className={styles.productsTitle}> Нерекомендуемые продукты</h5>
          <span className={styles.products}>
            {productsToString(productsArray)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default RightInfoPanel;
