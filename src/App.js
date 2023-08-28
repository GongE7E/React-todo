import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const [todos, setTodos] = useState(readTodoLocalStorage);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const onCreate = (todo) => setTodos([...todos, todo]);
  const onUpdate = (targetId) =>
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };
  return (
    <div className={styles.App}>
      <DarkModeProvider>
        <Header />
        <TodoForm onCreate={onCreate} />
        <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </DarkModeProvider>
    </div>
  );
}
function readTodoLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

export default App;
