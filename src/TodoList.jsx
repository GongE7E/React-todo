import React, { useContext, useState } from 'react';
import styles from './TodoList.module.css';
import TodoItem from './TodoItem';
import { TodosStateContext } from './App';
export default function TodoList() {
  const { todos } = useContext(TodosStateContext);
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
        {getSearchResult() &&
          getSearchResult().map((item) => <TodoItem key={item.id} {...item} />)}
      </ul>
    </section>
  );
}
