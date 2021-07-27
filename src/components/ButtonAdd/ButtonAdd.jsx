import style from './ButtonAdd.module.scss';

const ButtonAdd = ({ onHandleToggleModal }) => {
  return (
    <div className={style.boxBtn}>
      <button
        type="button"
        className={style.openModal}
        onClick={onHandleToggleModal}
      >
        +
      </button>
    </div>
  );
};

export default ButtonAdd;
