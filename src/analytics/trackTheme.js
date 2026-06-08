export function trackThemeToggle(isDark) {
  const event = {
    event: 'theme_toggle',
    theme: isDark ? 'dark' : 'light',
    timestamp: new Date().toISOString(),
  };

  // Log to console (replace with real analytics: GA4, Mixpanel, etc.)
  console.log('[Analytics]', event);

  // Example: Google Analytics 4
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', 'theme_toggle', { theme: isDark ? 'dark' : 'light' });
  // }

  // Example: Mixpanel
  // if (typeof mixpanel !== 'undefined') {
  //   mixpanel.track('Theme Toggle', { theme: isDark ? 'dark' : 'light' });
  // }

  // Store toggle count in localStorage for adoption rate
  const count = parseInt(localStorage.getItem('theme_toggle_count') || '0', 10);
  localStorage.setItem('theme_toggle_count', String(count + 1));
}

export function trackInitialTheme(isDark) {
  const event = {
    event: 'theme_loaded',
    theme: isDark ? 'dark' : 'light',
    toggle_count: localStorage.getItem('theme_toggle_count') || '0',
    timestamp: new Date().toISOString(),
  };
  console.log('[Analytics]', event);
}
