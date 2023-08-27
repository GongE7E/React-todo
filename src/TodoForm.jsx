import React, { useState, useRef } from 'react';
import styles from './TodoForm.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm({ onCreate }) {
  const textRef = useRef();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText('');
      return;
    } else {
      onCreate({ id: uuidv4(), text, isDone: false });
      setText('');
      textRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.inputBx}
        ref={textRef}
        value={text}
        placeholder='Add Todo'
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.addBtn}>Add</button>
    </form>
  );
}
