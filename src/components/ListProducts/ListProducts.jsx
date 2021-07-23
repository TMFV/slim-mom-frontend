import ItemProduct from '../ItemProduct';
import style from './Style.module.scss';

const ListProducts = () => {
  return (
    <div className={style.diary__list}>
      <div className={style.diary__boxTitle}>
        <h3 className={style.diary__title}>Введите название продукта</h3>
        <h3 className={style.diary__title}>Граммы</h3>
        <button className={style.diary__addProduct}>+</button>
      </div>
      <ItemProduct />
    </div>
  );
};

export default ListProducts;
