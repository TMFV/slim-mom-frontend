import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsReducer } from '../../redux/products';
import {
  addProducts,
  searchProducts,
} from '../../redux/products/products-operations';
import { productsSelectors } from '../../redux/products';
import style from './FormProduct.module.scss';
import ListSearchProducts from '../ListSearchProducts';

const FormProduct = ({ className, onHandleToggleModal }) => {
  const [nameProduct, setNameProduct] = useState('');
  const [volumProduct, setVolumProduct] = useState('');
  const listSearchProducts = useSelector(productsSelectors.getSearchList);
  const dispatch = useDispatch();

  const isModal = onHandleToggleModal ? true : false;

  const handleAddProduct = event => {
    event.preventDefault();
    const newProduct = {
      name: nameProduct,
      number: volumProduct,
    };
    dispatch(addProducts(newProduct));
    setNameProduct('');
    setVolumProduct('');
    if (isModal) {
      onHandleToggleModal();
    }
  };

  const handleChangeNameProduct = event => {
    event.preventDefault();
    let value = event.target.value;
    if (value !== '') {
      dispatch(searchProducts(value));
    }
    if (value === '') {
      dispatch(productsReducer.actions.searchProductsSuccess([]));
    }

    setNameProduct(event.target.value);
  };

  const handleChangeVolumProduct = event => {
    event.preventDefault();
    setVolumProduct(event.target.value);
  };

  const handelSelectItem = name => {
    setNameProduct(name);
    dispatch(productsReducer.actions.searchProductsSuccess([]));
  };

  return (
    <form className={className} onSubmit={handleAddProduct}>
      <input
        className={style.diary__nameProduct}
        name={nameProduct}
        value={nameProduct}
        label="Name"
        autoFocus
        required
        placeholder="Введите название продукта"
        onChange={handleChangeNameProduct}
      />
      <input
        className={style.diary__volumProduct}
        name={volumProduct}
        value={volumProduct}
        placeholder="Граммы"
        onChange={handleChangeVolumProduct}
      />
      <button className={style.diary__btnAddProduct} type="submit">
        {document.documentElement.clientWidth < 768 ? 'Добавить' : '+'}
      </button>
      <ListSearchProducts onHandleSelectItem={handelSelectItem} />
    </form>
  );
};

export default FormProduct;
