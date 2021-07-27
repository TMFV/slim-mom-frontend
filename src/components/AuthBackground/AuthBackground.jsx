import styles from './AuthBackground.module.scss';
import strowberry from '../../assets/pictures/StrawberryBig.png';
import banana from '../../assets/pictures/banana-desktop.png';
import leaves from '../../assets/pictures/auth-leaves-tablet.png';
import leavesDesctop from '../../assets/pictures/auth-leaves-desktop.png';
import { useRef, useState, useEffect } from 'react';

export default function AuthBackground({ children }) {
  const refs = useRef();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [clientWidth, setclientWidth] = useState(0);

  const handleResize = () => {
    const width = document.documentElement.clientWidth;
    setclientWidth(width);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = e => {
    const width = refs.current.offsetWidth;
    const height = refs.current.offsetHeight;
    const oX = e.pageX - width / 2;
    const oY = e.pageY - height / 2;

    setX(oX);
    setY(oY);
  };

  return (
    <div
      className={styles.background}
      onTouchMove={handleMouseMove}
      onMouseMove={handleMouseMove}
      ref={refs}
    >
      {clientWidth > 1280 ? (
        <div
          className={styles.leaves}
          style={{
            transform: `translateX(${x * 0.08}px) translateY(${y * 0.08}px)`,
          }}
        >
          <img src={leavesDesctop} alt="Leaves" />
        </div>
      ) : (
        <div
          className={styles.leaves}
          style={{
            transform: `translateX(${x * 0.08}px) translateY(${y * 0.08}px)`,
          }}
        >
          <img src={leaves} alt="Leaves" />
        </div>
      )}
      <div
        className={styles.banana}
        style={{
          transform: `translateX(${x * 0.05}px) rotate(${
            x * -0.005
          }deg) translateY(${y * -0.05}px)`,
        }}
      >
        <img src={banana} alt="Banana" />
      </div>
      <div
        className={styles.strowberry}
        style={{
          transform: `translateX(${x * 0.05}px) rotate(${
            x * -0.015
          }deg) translateY(${y * 0.05}px)`,
        }}
      >
        <img src={strowberry} alt="Strowberry" />
      </div>

      {children}
    </div>
  );
}
