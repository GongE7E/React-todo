import React, { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const onDarkMode = () => {
    setDarkMode(!darkMode);
    upDateDarkMode(!darkMode);
  };
  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    upDateDarkMode(isDark);
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, onDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function upDateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
