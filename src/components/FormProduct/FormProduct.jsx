import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../redux/products/products-operations';
import style from './FormProduct.module.scss';

const FormProduct = () => {
  const [nameProduct, setNameProduct] = useState('');
  const [volumProduct, setVolumProduct] = useState('');
  const dispatch = useDispatch();

  const handleAddProduct = event => {
    event.preventDefault();
    const newProduct = {
      name: nameProduct,
      number: volumProduct,
    };
    dispatch(addProducts(newProduct));
    setNameProduct('');
    setVolumProduct('');
  };

  const handleChangeNameProduct = event => {
    event.preventDefault();
    setNameProduct(event.target.value);
  };

  const handleChangeVolumProduct = event => {
    event.preventDefault();
    setVolumProduct(event.target.value);
  };
  return (
    <form className={style.diary__form} onSubmit={handleAddProduct}>
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
        +
      </button>
    </form>
  );
};

export default FormProduct;
