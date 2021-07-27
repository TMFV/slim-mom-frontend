import BaseLoader from 'react-loader-spinner';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <BaseLoader type="Watch" color="#fc842d" height={80} width={80} />
    </div>
  );
};

export default Loader;
