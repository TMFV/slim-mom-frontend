import style from './Style.module.scss';
import Date from '../../components/Date';
import FormProduct from '../../components/FormProduct';
import ListProducts from '../../components/ListProducts';

const Diary = () => {
  return (
    <div className={style.diary}>
      <Date />
      <FormProduct />
      <ListProducts />
    </div>
  );
};

export default Diary;
