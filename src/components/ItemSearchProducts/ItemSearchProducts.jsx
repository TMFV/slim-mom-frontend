import style from './ItemSearchProducts.module.scss';

const ItemSearchProducts = ({ isProduct: { name }, handleSelectItem }) => {
  // const handleClick = () => {
  //     handleSelectItem
  // }
  return (
    <li
      className={style.itemSearchProducts}
      onClick={() => handleSelectItem(name)}
    >
      {name}
    </li>
  );
};

export default ItemSearchProducts;
