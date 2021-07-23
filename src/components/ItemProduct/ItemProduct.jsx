import style from './Style.module.scss';

const ItemProduct = () => {
  return (
    <li className={style.diary__item}>
      <p className={style.diary__nameProduct}>Баклажан</p>
      <p className={style.diary__weight}>100 г</p>
      <p className={style.diary__ccal}>300 ккал</p>
    </li>
  );
};

export default ItemProduct;
