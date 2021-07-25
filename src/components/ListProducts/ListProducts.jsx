import ItemProduct from '../ItemProduct';
import { productsSelectors } from '../../redux/products';
import style from './Style.module.scss';
import { useSelector } from 'react-redux';

const ListProducts = () => {
  const isFilterProducts = useSelector(productsSelectors.getFilterProducts);
  return (
    <ul className={style.diary__listProducts}>
      <ItemProduct />
    </ul>
  );
};

export default ListProducts;
