import React, { useId, memo, useContext } from 'react';
import styles from './TodoItem.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import { TodosDispatchContext } from './App';

export default memo(function TodoItem({ id, isDone, text }) {
  const { onDelete, onUpdate } = useContext(TodosDispatchContext);
  const checkboxId = useId();
  console.log(`${id} 업데이트 `);
  return (
    <li className={styles.item}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={checkboxId}
        checked={isDone}
        onChange={() => onUpdate(id)}
      />
      <label className={styles.text} htmlFor={checkboxId}>
        {text}
      </label>
      <button className={styles.icon} onClick={() => onDelete(id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
});
