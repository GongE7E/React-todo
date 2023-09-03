import React, { useCallback, useMemo, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { DarkModeProvider } from './context/DarkModeContext';
import TodoReducer from './TodoReducer';

export const TodosStateContext = React.createContext();
export const TodosDispatchContext = React.createContext();

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
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'Update',
      targetId,
    });
  }, []);
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'Delete',
      targetId,
    });
  }, []);
  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles.App}>
      <DarkModeProvider>
        <Header />
        <TodosStateContext.Provider value={{ todos }}>
          <TodosDispatchContext.Provider value={memoizedDispatches}>
            <TodoForm />
            <TodoList />
          </TodosDispatchContext.Provider>
        </TodosStateContext.Provider>
      </DarkModeProvider>
    </div>
  );
}

export default App;

const mockTodo = [
  { id: 0, text: '밥', isDone: true },
  { id: 1, text: '공부', isDone: true },
];
