import React, { useState } from 'react';
import styles from './TodoList.module.css';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');
  const getSearchResult = () => {
    return search === ''
      ? todos
      : todos.filter((todo) => todo.text.includes(search.toLowerCase()));
  };
  return (
    <section className={styles.container}>
      <input
        className={styles.search}
        type='text'
        value={search}
        placeholder='🔎 Search'
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className={styles.item}>
        {getSearchResult().map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}
