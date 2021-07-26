import Container from '../../components/Container';
import style from './Diary.module.scss';
import Date from '../../components/Date';
import FormProduct from '../../components/FormProduct';
import ListProducts from '../../components/ListProducts';

const Diary = () => {
  return (
    <Container>
      <div className={style.diary}>
        <Date />
        <FormProduct />
        <ListProducts />
      </div>
    </Container>
  );
};

export default Diary;
