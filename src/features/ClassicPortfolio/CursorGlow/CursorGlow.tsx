import { useEffect } from 'react';
import styles from './CursorGlow.module.scss'

const CursorGlow = () => {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');

    const move = (e: MouseEvent) => {
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div className={styles.cursorGlow} id="cursor-glow" />;
};

export default CursorGlow;
