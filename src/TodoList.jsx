import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');
  const getSearchResult = () => {
    return search === ''
      ? todos
      : todos.filter((todo) => todo.text.includes(search.toLowerCase()));
  };
  return (
    <>
      <input
        type='text'
        value={search}
        placeholder='🔎 Search'
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {getSearchResult().map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}
