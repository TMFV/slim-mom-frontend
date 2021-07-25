import styles from './BurgerBtn.module.scss';

const BurgerBtn = () => {
  return (
    <nav>
      <div className={styles.burgerBtn}></div>
      <span className={styles.burgerBtn__line} />
    </nav>
  );
};

export default BurgerBtn;
