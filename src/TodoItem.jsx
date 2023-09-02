import React, { useId, memo } from 'react';
import styles from './TodoItem.module.css';
import { FaTrashAlt } from 'react-icons/fa';

export default memo(function TodoItem({
  id,
  isDone,
  text,
  onUpdate,
  onDelete,
}) {
  const checkboxId = useId();

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
