import styles from './HomePageBackground.module.scss';

export default function HomePageBackground({ children }) {
  return <div className={styles.back}>{children}</div>;
}
