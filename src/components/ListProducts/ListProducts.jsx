import ItemProduct from '../ItemProduct';
import { productsSelectors } from '../../redux/products';
import style from './ListProduct.module.scss';
import { useSelector } from 'react-redux';

const ListProducts = () => {
  const listProducts = useSelector(productsSelectors.getStateProducts);
  return (
    <ul className={style.diary__listProducts}>
      {listProducts.map(product => (
        <ItemProduct key={product.id} isProduct={product} />
      ))}
    </ul>
  );
};

export default ListProducts;
