import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.body.setAttribute('data-theme', initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <button className='sticky p-2 rounded-full text-black dark:text-white 
             cursor-pointer hover:bg-blue-400 dark:hover:bg-blue-400 
             transition-colors focus:outline-none focus:ring-2 
             focus:ring-offset-2 focus:ring-blue-500' onClick={toggleTheme}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggle;