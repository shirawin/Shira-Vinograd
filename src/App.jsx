import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';
import './styles/theme.css';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <header className="header">
          <h1>My App</h1>
          <div className="header-right">
            <span className="profile-icon">👤</span>
            <DarkModeToggle />
          </div>
        </header>
        <main className="content">
          <h2>Welcome!</h2>
          <p>Toggle the switch in the top-right corner to switch between light and dark mode.</p>
          <div className="card">
            <h3>Sample Card</h3>
            <p>This card demonstrates the theme colors in both light and dark mode.</p>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
