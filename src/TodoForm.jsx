import React, { useState, useRef } from 'react';

export default function TodoForm({ onCreate }) {
  const textRef = useRef();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText('');
      return;
    } else {
      onCreate({ id: 4, text, isDone: false });
      setText('');
      textRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={textRef}
        value={text}
        placeholder='Add Todo'
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
