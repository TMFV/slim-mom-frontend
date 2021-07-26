import FormProduct from '../FormProduct';
import style from './ModalAddProducts.module.scss';

const ModalAddProducts = ({ className, onHandleToggleModal }) => {
  //     const handleCloseModal = () => {
  //       onHandleToggleModal()
  //   };
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <button
          className={style.closeModal}
          type="button"
          onClick={onHandleToggleModal}
        >
          <svg
            width="12"
            height="7"
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </button>
        <FormProduct
          className={className}
          onHandleToggleModal={onHandleToggleModal}
        />
      </div>
    </div>
  );
};

export default ModalAddProducts;
