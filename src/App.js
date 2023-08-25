import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
const mockTodo = [
  {
    id: 0,
    text: '밥먹기',
    isDone: true,
  },
  {
    id: 1,
    text: '노래듣기',
    isDone: true,
  },
  {
    id: 2,
    text: '영화보기',
    isDone: false,
  },
  {
    id: 3,
    text: '전시회가기',
    isDone: true,
  },
];

function App() {
  const [todos, setTodos] = useState(mockTodo);
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
    <div>
      <TodoForm onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
