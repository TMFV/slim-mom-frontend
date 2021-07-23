import style from './Style.module.scss';

const Date = () => {
  return (
    <div className={style.diary__date}>
      <span className={style.diary__dateView}>23/07/2021</span>
      <div className={style.diary__calendar}></div>
    </div>
  );
};

export default Date;
