import { useState, useEffect } from 'react';
import Container from '../../components/Container';
import style from './Diary.module.scss';
import Date from '../../components/Date';
import FormProduct from '../../components/FormProduct';
import ListProducts from '../../components/ListProducts';
import ModalAddProducts from '../../components/ModalAddProducts';
import ButtonAdd from '../../components/ButtonAdd';
import { useDispatch } from 'react-redux';
import { dowloadProducts } from '../../redux/products/products-operations';

const Diary = () => {
  const [isModal, setIsModal] = useState(false);
  const classNameModal = style.diary__formModal;
  const classNameMobile = style.diary__formMobile;
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
        <ListProducts />
        <ButtonAdd onHandleToggleModal={handleToggleModal} />
        {isModal ? (
          <ModalAddProducts
            className={classNameModal}
            onHandleToggleModal={handleToggleModal}
          />
        ) : null}
      </div>
    </Container>
  );
};

export default Diary;
