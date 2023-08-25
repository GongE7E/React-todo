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
  return (
    <div>
      <TodoForm onCreate={onCreate} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
