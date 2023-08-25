import React, { useId } from 'react';

export default function TodoItem({ id, isDone, text, onUpdate }) {
  const checkboxId = useId();
  return (
    <li>
      <input
        type='checkbox'
        id={checkboxId}
        checked={isDone}
        onChange={() => onUpdate(id)}
      />
      <label htmlFor={checkboxId}>{text}</label>
      <button>❌</button>
    </li>
  );
}
