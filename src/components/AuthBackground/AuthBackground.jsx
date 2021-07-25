import styles from './AuthBackground.module.scss';

export default function AuthBackground({ children }) {
  return <div className={styles.background}>{children}</div>;
}
