import style from './Style.module.scss';
import Date from '../../components/Date';
import ListProducts from '../../components/ListProducts';

const Diary = () => {
  return (
    <div className={style.diary}>
      <Date />
      <ListProducts />
    </div>
  );
};

export default Diary;
