import React, { useContext, useEffect, useState } from 'react';
import styles from './Header.module.css';
import { DarkModeContext } from './context/DarkModeContext';
import { FaReact } from 'react-icons/fa';

const week = ['일', '월', '화', '수', '목', '금', '토'];
export default function Header() {
  const [current, setCurrent] = useState('');
  const { darkMode, onDarkMode } = useContext(DarkModeContext);
  useEffect(() => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    const dayOfWeek = week[new Date().getDay()];
    setCurrent(year + '-' + month + '-' + date + '(' + dayOfWeek + ')');
  }, []);
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ToDo List</h1>
      <div>
        <h4 className={styles.date}>{current}</h4>
        <button className={styles.toggle} onClick={onDarkMode}>
          {darkMode ? <FaReact /> : <FaReact />}
        </button>
      </div>
    </header>
  );
}
