import { useState, useEffect } from 'react';
import Container from '../../components/Container';
import style from './Diary.module.scss';
import Date from '../../components/Date';
import FormProduct from '../../components/FormProduct';
import ListProducts from '../../components/ListProducts';
import ModalAddProducts from '../../components/ModalAddProducts';
import ButtonAdd from '../../components/ButtonAdd';
import { useDispatch, useSelector } from 'react-redux';
import { dowloadProducts } from '../../redux/products/products-operations';
import { productsSelectors } from '../../redux/products';
// import ListSearchProducts from '../../components/ListSearchProducts';

const Diary = () => {
  const [isModal, setIsModal] = useState(false);
  const classNameModal = style.diary__formModal;
  const classNameMobile = style.diary__formMobile;
  const isListProducts = useSelector(productsSelectors.getStateProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dowloadProducts());
  }, []);

  const handleToggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <Container>
      <div className={style.diary}>
        <Date />
        <FormProduct className={classNameMobile} />
        {isListProducts.length > 0 ? <ListProducts /> : null}
        <ButtonAdd onHandleToggleModal={handleToggleModal} />
        {isModal ? (
          <ModalAddProducts
            className={classNameModal}
            onHandleToggleModal={handleToggleModal}
          />
        ) : null}
        {/* <ListSearchProducts /> */}
      </div>
    </Container>
  );
};

export default Diary;
