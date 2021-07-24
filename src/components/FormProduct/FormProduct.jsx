import { useState } from 'react';
import style from './Style.module.scss';

const FormProduct = () => {
  const [nameProduct, setNameProduct] = useState('');
  const [volumProduct, setVolumProduct] = useState('');

  const hendleAddProduct = event => {
    event.preventDefault();
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
    <form className={style.diary__form} onSubmit={hendleAddProduct}>
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
