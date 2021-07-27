import styles from './Modal.module.scss';
import propTypes from 'prop-types';

// const formula = 10 * вес + 6.25 * рост - 5 * возраст - 161 - 10 * (вес - желаемый вес);

const formula = 2800;

export default function Modal({ active, setActive, products }) {
  return (
    <>
      <div
        className={
          active ? `${styles.backdrop} ${styles.active}` : styles.backdrop
        }
        onClick={() => setActive(false)}
      >
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
          <div className={styles.modalClose} onClick={() => setActive(false)}>
            x
          </div>
          <h2 className={styles.modalTitle}>
            Ваша рекомендуемая суточная норма калорий составляет
          </h2>
          <p className={styles.modalData}>
            {formula}
            <span className={styles.madalCalories}>ккал</span>
          </p>
          <div className={styles.modalLine}></div>
          <div className={styles.modalAlignment}>
            <h3 className={styles.modalProducts}>
              Продукты, которые вам <br />
              не рекомендуется употреблять
            </h3>
            {/* <ol className={styles.modalBlockList}>
              {products.map(product => (
                <li className={styles.modalList} key={product.id}>
                  {product.title.ru}
                </li>
              ))}
            </ol> */}
            <ol className={styles.modalBlockList}>
              <li className={styles.modalList}>Мучные продукты</li>
              <li className={styles.modalList}>Молоко</li>
              <li className={styles.modalList}>Красное мясо</li>
              <li className={styles.modalList}>Копчённости</li>
            </ol>
          </div>
          <button
            type="button"
            className={styles.modalButton}
            onClick={() => setActive(false)}
          >
            Начать худеть
          </button>
        </div>
      </div>
    </>
  );
}

// Modal.propTypes = {
//   products: propTypes.arrayOf(
//     propTypes.shape({
//       id: propTypes.string.isRequired,
//       title: propTypes.string.isRequired,
//     }).isRequired,
//   ),
// };
