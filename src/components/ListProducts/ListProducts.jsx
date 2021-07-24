import ItemProduct from '../ItemProduct';
import style from './Style.module.scss';

const ListProducts = () => {
  return (
    <ul className={style.diary__listProducts}>
      <ItemProduct />
    </ul>
  );
};

export default ListProducts;
