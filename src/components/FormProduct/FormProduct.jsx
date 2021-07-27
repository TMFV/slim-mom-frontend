import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../redux/products/products-operations';
import style from './FormProduct.module.scss';

const FormProduct = ({ className, onHandleToggleModal }) => {
  const [nameProduct, setNameProduct] = useState('');
  const [volumProduct, setVolumProduct] = useState('');
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
    setNameProduct(event.target.value);
  };

  const handleChangeVolumProduct = event => {
    event.preventDefault();
    setVolumProduct(event.target.value);
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
    </form>
  );
};

export default FormProduct;
