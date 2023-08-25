import React, { useId } from 'react';

export default function TodoItem({ id, isDone, text }) {
  const checkboxId = useId();
  return (
    <li>
      <input type='checkbox' id={checkboxId} checked={isDone} />
      <label htmlFor={checkboxId}>{text}</label>
      <button>❌</button>
    </li>
  );
}
