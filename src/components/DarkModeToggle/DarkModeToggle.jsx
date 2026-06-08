import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './DarkModeToggle.module.css';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggleBtn}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title="Toggle Dark Mode"
      role="switch"
      aria-checked={isDark}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTheme(); } }}
    >
      <span className={styles.icon} aria-hidden="true">
        {isDark ? '🌙' : '☀️'}
      </span>
      <span className={styles.track}>
        <span className={`${styles.thumb} ${isDark ? styles.thumbDark : ''}`} />
      </span>
      <span className={styles.srOnly}>
        {isDark ? 'Dark mode on' : 'Light mode on'}
      </span>
    </button>
  );
}
