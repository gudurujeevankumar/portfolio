'use client';

import React from 'react';

const emptySubscribe = () => () => {};

function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'class') {
        callback();
      }
    }
  });
  observer.observe(document.documentElement, { attributes: true });
  window.addEventListener('storage', callback);
  return () => {
    observer.disconnect();
    window.removeEventListener('storage', callback);
  };
}

function getThemeSnapshot(): 'light' | 'dark' {
  return document.documentElement.classList.contains('light') ? 'light' : 'dark';
}

function getThemeServerSnapshot(): 'light' | 'dark' {
  return 'dark';
}

export default function ThemeToggle() {
  const isMounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const theme = React.useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    // Add temporary transition class for silky smooth visual switch
    root.classList.add('theme-transitioning');

    if (nextTheme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }

    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // Ignore in private storage sandbox
    }

    setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 250);
  };

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <div
        className="w-11 h-11 sm:w-9 sm:h-9 rounded-full border border-border-subtle bg-surface/50 opacity-0"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 sm:w-9 sm:h-9 sm:min-w-[36px] sm:min-h-[36px] rounded-full border border-border-subtle bg-surface hover:bg-surface-hover text-muted-foreground hover:text-foreground transition-all duration-150 cursor-pointer focus-visible:ring-2 focus-visible:ring-focus"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        /* Sun Icon for switching to light */
        <svg
          className="w-4 h-4 transition-transform duration-200 hover:rotate-45"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        /* Moon Icon for switching to dark */
        <svg
          className="w-4 h-4 transition-transform duration-200 hover:-rotate-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
