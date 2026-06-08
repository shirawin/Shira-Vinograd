import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './DarkModeToggle.module.css';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggleBtn}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle Dark Mode"
      role="switch"
      aria-checked={isDark}
    >
      <span className={styles.icon}>{isDark ? '🌙' : '☀️'}</span>
      <span className={styles.track}>
        <span className={`${styles.thumb} ${isDark ? styles.thumbDark : ''}`} />
      </span>
    </button>
  );
}
