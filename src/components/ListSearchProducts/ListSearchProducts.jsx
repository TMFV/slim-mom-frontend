import { useSelector } from 'react-redux';
import style from './ListSearchProducts.module.scss';
import { productsSelectors } from '../../redux/products';
import ItemSearchProducts from '../ItemSearchProducts/ItemSearchProducts';

const ListSearchProducts = ({ onHandleSelectItem }) => {
  const listSearchProducts = useSelector(productsSelectors.getSearchList);
  return (
    <ul className={style.listSearchProducts}>
      {listSearchProducts.map(product => (
        <ItemSearchProducts
          key={product.name}
          isProduct={product}
          handleSelectItem={onHandleSelectItem}
        />
      ))}
    </ul>
  );
};

export default ListSearchProducts;
