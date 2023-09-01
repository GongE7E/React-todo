import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { DarkModeProvider } from './context/DarkModeContext';
import TodoReducer from './TodoReducer';

function App() {
  const [todos, dispatch] = useReducer(TodoReducer, mockTodo);

  const onCreate = (text) => {
    dispatch({
      type: 'Create',
      newItem: {
        id: uuidv4(),
        text,
        isDone: false,
      },
    });
  };
  const onUpdate = (targetId) => {
    dispatch({
      type: 'Update',
      targetId,
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: 'Delete',
      targetId,
    });
  };
  return (
    <div className={styles.App}>
      <DarkModeProvider>
        <Header />
        <TodoForm onCreate={onCreate} />
        <TodoList onDelete={onDelete} onUpdate={onUpdate} todos={todos} />
      </DarkModeProvider>
    </div>
  );
}

export default App;

const mockTodo = [
  { id: 0, text: '밥', isDone: true },
  { id: 1, text: '공부', isDone: true },
];
