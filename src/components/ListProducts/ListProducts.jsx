import ItemProduct from '../ItemProduct';
import { productsSelectors } from '../../redux/products';
import style from './ListProduct.module.scss';
import { useSelector } from 'react-redux';
// import SimpleBar from 'simplebar';
// import 'simplebar/dist/simplebar.min.css';

const ListProducts = () => {
  const listProducts = useSelector(productsSelectors.getStateProducts);
  console.log(listProducts);
  // const isFilterProducts = useSelector(productsSelectors.getFilterProducts);
  // const scroll = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <ul className={style.diary__listProducts}>
      {listProducts.map(product => (
        <ItemProduct key={product.id} isProduct={product} />
      ))}
    </ul>
  );
};

export default ListProducts;
